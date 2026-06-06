<?php
// Shared configuration for both appointment and contact mailers.
// Edit these once and both endpoints pick up the change.

// Where the form submissions land.
const RECIPIENT_EMAIL = 'nellore@adgrohair.com';
const RECIPIENT_NAME  = 'Advanced GroHair & GloSkin — Nellore';

// "From" address must be on a domain that this Hostinger account hosts
// — otherwise SPF/DMARC will reject the mail. Create this mailbox in
// hPanel → Emails → Email Accounts before going live.
const FROM_EMAIL = 'noreply@adgrohairgloskinnellore.com';
const FROM_NAME  = 'GroHair Nellore Website';

// Allowed origins for CORS. Add http://localhost:5173 here while you
// are testing the React app against a remote PHP endpoint.
const ALLOWED_ORIGINS = [
    'https://adgrohairgloskinnellore.com',
    'https://www.adgrohairgloskinnellore.com',
];

// Lock down browser-side requests via CORS + a tiny honeypot field
// named "website" that real users will leave blank.
function send_cors_headers(): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, ALLOWED_ORIGINS, true)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Vary: Origin');
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

function read_payload(): array
{
    $raw = file_get_contents('php://input');
    $json = json_decode($raw, true);
    if (is_array($json)) return $json;
    return $_POST ?: [];
}

function clean(string $value): string
{
    return trim(filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
}

function send_mail(string $subject, string $body, string $replyEmail, string $replyName): bool
{
    $to = sprintf('%s <%s>', RECIPIENT_NAME, RECIPIENT_EMAIL);
    $headers = [
        sprintf('From: %s <%s>', FROM_NAME, FROM_EMAIL),
        sprintf('Reply-To: %s <%s>', $replyName, $replyEmail),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . PHP_VERSION,
    ];
    return mail($to, $subject, $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);
}

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload);
    exit;
}
