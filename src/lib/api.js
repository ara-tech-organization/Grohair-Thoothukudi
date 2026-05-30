const ENDPOINT =
  import.meta.env.VITE_MAIL_ENDPOINT ||
  "https://adgrohairgloskintiruppur.com/mail.php";

export async function submitForm(payload) {
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, error: "network" };
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    return { ok: false, error: "bad_response" };
  }

  if (!res.ok || !data?.ok) {
    return {
      ok: false,
      error: data?.error || "send_failed",
      errors: data?.errors,
    };
  }
  return { ok: true };
}
