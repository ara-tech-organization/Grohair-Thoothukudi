<?php
require_once __DIR__ . '/config.php';

send_cors_headers();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$data = read_payload();

// Honeypot — bots tend to fill every field, real users will not.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$name      = clean((string)($data['name']      ?? ''));
$phone     = clean((string)($data['phone']     ?? ''));
$emailRaw  = trim((string)($data['email']      ?? ''));
$treatment = clean((string)($data['treatment'] ?? ''));
$date      = clean((string)($data['date']      ?? ''));
$message   = clean((string)($data['message']   ?? ''));

$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);

$missing = [];
if ($name === '')      $missing[] = 'name';
if ($phone === '')     $missing[] = 'phone';
if (!$email)           $missing[] = 'email';
if ($treatment === '') $missing[] = 'treatment';
if ($date === '')      $missing[] = 'date';

if ($missing) {
    respond(422, [
        'ok'      => false,
        'error'   => 'Missing required fields',
        'missing' => $missing,
    ]);
}

$messageBody = $message !== '' ? $message : '(none)';
$timestamp   = date('Y-m-d H:i:s');
$ip          = $_SERVER['REMOTE_ADDR']     ?? 'unknown';
$userAgent   = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$subject = sprintf('New Appointment Request — %s', $name);

$body = "A new appointment request has been received from the website.\n\n"
      . "Name        : {$name}\n"
      . "Phone       : {$phone}\n"
      . "Email       : {$email}\n"
      . "Treatment   : {$treatment}\n"
      . "Preferred   : {$date}\n\n"
      . "Message:\n{$messageBody}\n\n"
      . "---\n"
      . "Submitted on : {$timestamp}\n"
      . "IP           : {$ip}\n"
      . "User-Agent   : {$userAgent}\n";

$sent = send_mail($subject, $body, $email, $name);

if (!$sent) {
    error_log('[send-appointment.php] mail() returned false for ' . $email);
    respond(500, ['ok' => false, 'error' => 'Mail delivery failed']);
}

respond(200, ['ok' => true]);
