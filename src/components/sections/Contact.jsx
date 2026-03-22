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
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Get In Touch<span className="text-primary">.</span>
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            I'm currently seeking software engineering internships and entry-level roles.
                            Whether you have a challenging opportunity, want to collaborate, or just want to connect,
                            my inbox is always open!
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-500">Email</p>
                                    <a
                                        href="mailto:bishalpaul151@gmail.com"
                                        className="text-white hover:text-primary transition-colors font-medium"
                                    >
                                        bishalpaul151@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-500">Location</p>
                                    <p className="text-white font-medium">Jalandhar, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="project-card">
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
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
                                <div className="mt-4 p-4 rounded-xl bg-zinc-900 border border-green-500/20 flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <p className="text-sm text-green-400">
                                        Thank you for your message! I'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mt-4 p-4 rounded-xl bg-zinc-900 border border-primary/20 flex items-center gap-3">
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
