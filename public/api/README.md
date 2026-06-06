# Mail API — Hostinger Setup

Two PHP endpoints power the React form submissions:

- `POST /api/send-appointment.php` — used by `src/pages/Appointment.jsx`
- `POST /api/send-contact.php` — used by `src/pages/Contact.jsx`

Both share `config.php`, which holds the recipient address, the "From" mailbox,
and the CORS allow-list.

## Required setup before going live

1. **Email account** — In hPanel → Emails → Email Accounts, create a sending
   mailbox on the hosting domain, e.g. `noreply@adgrohairgloskinnellore.com`.
   Without this, Hostinger's SPF will reject outgoing mail.
2. **Recipient inbox** — Confirm `nellore@adgrohair.com` is reachable.
3. **DNS** — Make sure SPF (and ideally DKIM + DMARC) are configured on
   `adgrohairgloskinnellore.com` so Gmail and other providers do not flag
   the mail as spam. Hostinger sets SPF automatically for hosted domains.
4. **CORS** — `config.php` allows requests from
   `https://adgrohairgloskinnellore.com` (and `www`). If you serve the
   React app from another origin, add it to `ALLOWED_ORIGINS`.

## Deployment

After running `npm run build`, the `dist/` folder will contain `api/`.
Upload `dist/*` to `public_html/` on Hostinger. The structure ends up as:

```
public_html/
  index.html
  assets/...
  api/
    config.php
    send-appointment.php
    send-contact.php
```

The React app posts to `/api/send-appointment.php` and `/api/send-contact.php`
using relative URLs, so no rebuild is needed when domains change.

## Test

```bash
curl -X POST https://adgrohairgloskinnellore.com/api/send-contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"you@example.com","message":"Hello"}'
```

Expected response: `{"ok":true}`. Check the recipient inbox within a minute.

## Switching to SMTP later

If `mail()` deliverability becomes an issue, swap `send_mail()` in `config.php`
for a PHPMailer SMTP implementation pointing at Hostinger's mail server. The
public PHP endpoints and React code do not need to change.
