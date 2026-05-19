import { useState } from "react";
import { Send, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
    message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [submitError, setSubmitError] = useState("");

    const validateField = (field, value) => {
        try {
            contactSchema.shape[field].parse(value);
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors((prev) => ({ ...prev, [field]: err.errors[0].message }));
            }
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            validateField(field, value);
        }
    };

    const handleBlur = (field) => {
        validateField(field, formData[field]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = {};
            result.error.errors.forEach((error) => {
                const field = error.path[0];
                fieldErrors[field] = error.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setStatus("loading");
        setSubmitError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(result?.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="section-container">
                <div className="mb-12">
                    <p className="section-kicker">Contact</p>
                    <h2 className="section-title">
                        Get In Touch<span className="text-primary">.</span>
                    </h2>
                    <p className="section-lede">
                        I'm currently seeking software engineering internships and entry-level roles.
                    </p>
                    <div className="section-heading-line" />
                </div>

                <div className="grid gap-8 lg:grid-cols-5">
                    <div className="space-y-6 lg:col-span-2">
                        <p className="text-lg leading-relaxed text-slate-600">
                            Whether you have a challenging opportunity, want to collaborate, or just want to connect, my inbox is always open!
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="project-card flex items-center gap-4 p-4">
                                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">Email</p>
                                    <a
                                        href="mailto:bishalpaul151@gmail.com"
                                        className="font-semibold text-slate-950 transition-colors hover:text-primary"
                                    >
                                        bishalpaul151@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="project-card flex items-center gap-4 p-4">
                                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">Location</p>
                                    <p className="font-semibold text-slate-950">Jalandhar, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="project-card p-5 md:p-6">
                            <div className="mb-4 grid gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        onBlur={() => handleBlur("name")}
                                        className={`input-field ${errors.name ? "border-primary focus:ring-primary/50" : ""}`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-primary">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        onBlur={() => handleBlur("email")}
                                        className={`input-field ${errors.email ? "border-primary focus:ring-primary/50" : ""}`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-primary">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                    onBlur={() => handleBlur("message")}
                                    className={`input-field resize-none ${errors.message ? "border-primary focus:ring-primary/50" : ""}`}
                                    placeholder="Your message..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-primary">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="mt-4 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <p className="text-sm text-green-700">
                                        Thank you for your message! I'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mt-4 flex items-center gap-3 rounded-lg border border-primary/20 bg-red-50 p-4">
                                    <AlertCircle className="w-5 h-5 text-primary" />
                                    <p className="text-sm text-primary">
                                        {submitError || "Something went wrong. Please try again later."}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
