import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function contactApiDevPlugin(resendApiKey) {
  return {
    name: "contact-api-dev-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact") {
          next();
          return;
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { error: "Method not allowed" });
          return;
        }

        const apiKey = resendApiKey;
        if (!apiKey) {
          sendJson(res, 500, { error: "Server is missing RESEND_API_KEY" });
          return;
        }

        let payload;
        try {
          const raw = await readBody(req);
          payload = JSON.parse(raw || "{}");
        } catch {
          sendJson(res, 400, { error: "Invalid JSON body" });
          return;
        }

        const name = typeof payload?.name === "string" ? payload.name.trim() : "";
        const email = typeof payload?.email === "string" ? payload.email.trim() : "";
        const message = typeof payload?.message === "string" ? payload.message.trim() : "";

        if (!name) {
          sendJson(res, 400, { error: "Name is required" });
          return;
        }
        if (!EMAIL_REGEX.test(email)) {
          sendJson(res, 400, { error: "Valid email is required" });
          return;
        }
        if (message.length < 10) {
          sendJson(res, 400, { error: "Message must be at least 10 characters" });
          return;
        }

        try {
          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Portfolio Contact <onboarding@resend.dev>",
              to: ["bishalpaul151@gmail.com"],
              reply_to: email,
              subject: `New portfolio message from ${name}`,
              text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }),
          });

          const resendData = await resendResponse.json().catch(() => ({}));
          if (!resendResponse.ok) {
            sendJson(res, 502, { error: resendData?.message || "Failed to send email" });
            return;
          }

          sendJson(res, 200, { success: true });
        } catch {
          sendJson(res, 500, { error: "Unexpected server error" });
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const resendApiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY || "";

  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    contactApiDevPlugin(resendApiKey),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
