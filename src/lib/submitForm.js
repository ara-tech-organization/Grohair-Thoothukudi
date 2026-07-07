const EMAIL_ENDPOINT = "https://adgrohairgloskinthoothukudi.com/api/email.php";

/**
 * Posts a lead to the site's mail handler.
 * `overrides` may supply treatment/message/source; date/time are always
 * stamped with the current submission moment.
 */
export async function submitForm({ name, email, phone, treatment = "-", message = "-" }) {
  const now = new Date();

  const payload = {
    name: name || "-",
    email: email || "-",
    phone: phone || "-",
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    treatment: treatment || "-",
    message: message || "-",
    source: "Website Form",
  };

  const res = await fetch(EMAIL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Submission failed with status ${res.status}`);
  }

  return res.json().catch(() => ({ ok: true }));
}
