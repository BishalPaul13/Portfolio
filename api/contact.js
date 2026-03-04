export const config = {
  runtime: 'edge',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message) {
  return new Response(JSON.stringify({ error: message }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return new Response(JSON.stringify({ error: "Server configuration error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const message = typeof payload?.message === "string" ? payload.message.trim() : "";

  if (!name) return badRequest("Name is required");
  if (!EMAIL_REGEX.test(email)) return badRequest("Valid email is required");
  if (message.length < 10) return badRequest("Message must be at least 10 characters");

  console.log("Contact form payload received:", { name, email, messageLength: message.length });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["bishalpaul151@gmail.com"],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    clearTimeout(timeoutId);

    const resendData = await resendResponse.json().catch(() => ({}));
    console.log("Resend API response:", resendResponse.status, resendData);

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ error: resendData?.message || "Failed to send email" }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    clearTimeout(timeoutId);
    console.error("Fetch error:", err);
    const errorMsg = err.name === 'AbortError' ? "Request timed out" : "Internal server error";
    return new Response(JSON.stringify({ error: errorMsg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
