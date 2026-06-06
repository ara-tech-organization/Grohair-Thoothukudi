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

if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$name     = clean((string)($data['name']    ?? ''));
$emailRaw = trim((string)($data['email']    ?? ''));
$message  = clean((string)($data['message'] ?? ''));

$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);

$missing = [];
if ($name === '')    $missing[] = 'name';
if (!$email)         $missing[] = 'email';
if ($message === '') $missing[] = 'message';

if ($missing) {
    respond(422, [
        'ok'      => false,
        'error'   => 'Missing required fields',
        'missing' => $missing,
    ]);
}

$timestamp = date('Y-m-d H:i:s');
$ip        = $_SERVER['REMOTE_ADDR']     ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$subject = sprintf('New Contact Enquiry — %s', $name);

$body = "A new enquiry has been received from the website contact form.\n\n"
      . "Name  : {$name}\n"
      . "Email : {$email}\n\n"
      . "Message:\n{$message}\n\n"
      . "---\n"
      . "Submitted on : {$timestamp}\n"
      . "IP           : {$ip}\n"
      . "User-Agent   : {$userAgent}\n";

$sent = send_mail($subject, $body, $email, $name);

if (!$sent) {
    error_log('[send-contact.php] mail() returned false for ' . $email);
    respond(500, ['ok' => false, 'error' => 'Mail delivery failed']);
}

respond(200, ['ok' => true]);
