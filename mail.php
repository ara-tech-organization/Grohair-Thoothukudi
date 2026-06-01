<?php
declare(strict_types=1);

/**
 * Mail handler for contact + appointment forms.
 * Upload to the same domain as the website (e.g. https://adgrohair.com/mail.php).
 *
 * Frontend should POST JSON with a `type` field of either:
 *   "contact"     — fields: name, email, phone, message
 *   "appointment" — fields: name, email, phone, treatment, date, time, notes
 *
 * A hidden honeypot field `company` is checked — if filled, the request is
 * silently accepted but no email is sent.
 */

// ===================== CONFIGURATION =====================
const MAIL_TO          = 'namakkal@adgrohair.com';                       // where form submissions are delivered
const MAIL_FROM        = 'no-reply@adgrohairgloskinnamakkal.com';        // must be on the SAME domain that hosts this file (mailbox must exist on that domain)
const MAIL_FROM_NAME   = 'Advanced GroHair & GloSkin Namakkal';
const ALLOWED_ORIGINS  = [
    'https://adgrohairgloskinnamakkal.com',
    'https://www.adgrohairgloskinnamakkal.com',
];
// =========================================================

header('Content-Type: application/json; charset=utf-8');

// CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array('*', ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: *');
} elseif ($origin && in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Accept JSON body or url-encoded form
$raw  = file_get_contents('php://input') ?: '';
$data = [];
if ($raw !== '' && str_starts_with(ltrim($raw), '{')) {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) $data = $decoded;
} else {
    $data = $_POST;
}

// Honeypot — bots fill every field
if (!empty($data['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$type = is_string($data['type'] ?? null) ? $data['type'] : '';
if (!in_array($type, ['contact', 'appointment'], true)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_type']);
    exit;
}

/** Strip control chars + CR/LF (header-injection safe) and clamp length. */
function clean(string $s, int $max = 500): string {
    $s = preg_replace('/[\r\n\t\x00-\x1F]+/u', ' ', trim($s)) ?? '';
    return mb_substr($s, 0, $max);
}

$name  = clean((string)($data['name']  ?? ''));
$email = clean((string)($data['email'] ?? ''), 200);
$phone = clean((string)($data['phone'] ?? ''), 50);

$errors = [];
if ($name === '') {
    $errors['name'] = 'Name is required.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Valid email is required.';
}
$digits = preg_replace('/\D/', '', $phone) ?? '';
if (strlen($digits) < 7) {
    $errors['phone'] = 'Valid phone is required.';
}

$treatment = $date = $time = $notes = $message = '';

if ($type === 'contact') {
    $message = trim((string)($data['message'] ?? ''));
    if (mb_strlen($message) < 10) {
        $errors['message'] = 'Message must be at least 10 characters.';
    }
} else {
    $treatment = clean((string)($data['treatment'] ?? ''), 200);
    $date      = clean((string)($data['date']      ?? ''), 30);
    $time      = clean((string)($data['time']      ?? ''), 30);
    $notes     = trim((string)($data['notes']      ?? ''));
    if ($treatment === '') {
        $errors['treatment'] = 'Choose a treatment.';
    }
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
        $errors['date'] = 'Invalid date.';
    }
    if (!preg_match('/^\d{1,2}:\d{2}$/', $time)) {
        $errors['time'] = 'Invalid time.';
    }
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

// ----- Build email -----
$subject = $type === 'contact'
    ? "New website message from {$name}"
    : "New appointment request — {$treatment}";

$lines = [];
$lines[] = 'Type: ' . ucfirst($type);
$lines[] = "Name:  {$name}";
$lines[] = "Email: {$email}";
$lines[] = "Phone: {$phone}";

if ($type === 'contact') {
    $lines[] = '';
    $lines[] = 'Message:';
    $lines[] = $message;
} else {
    $lines[] = "Treatment: {$treatment}";
    $lines[] = "Date: {$date}";
    $lines[] = "Time: {$time}";
    if ($notes !== '') {
        $lines[] = '';
        $lines[] = 'Notes:';
        $lines[] = $notes;
    }
}

$lines[] = '';
$lines[] = '— Submitted ' . gmdate('Y-m-d H:i') . ' UTC';
$lines[] = 'Source IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '?');

$body = implode("\r\n", $lines);

// Headers — From must be on the host's own domain or the host will reject / spam-bin it.
$fromName       = '=?UTF-8?B?' . base64_encode(MAIL_FROM_NAME) . '?=';
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$headers   = [];
$headers[] = "From: {$fromName} <" . MAIL_FROM . '>';
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . PHP_VERSION;

$ok = @mail(
    MAIL_TO,
    $encodedSubject,
    $body,
    implode("\r\n", $headers),
    '-f' . MAIL_FROM
);

if (!$ok) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
