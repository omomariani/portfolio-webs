import { useState } from "react";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

// Bumanda Store — Contact Us
// Palette: ivory #F7F3EC, ink #201D1A, brick-clay #A6613D, sage #7C8467, hairline #DCD4C7
// Type: serif display (headline) + clean sans (body/UI)

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your actual send logic (email service, backend endpoint, etc.)
    setStatus("sent");
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#F7F3EC", color: "#201D1A" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16">
        {/* Left column — editorial intro */}
        <div className="flex flex-col justify-between">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "#A6613D", letterSpacing: "0.2em" }}
            >
              Bumanda Store
            </p>
            <h1
              className="text-5xl md:text-6xl leading-[1.05] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let's talk
              <br />
              style.
            </h1>
            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "#4A453F" }}
            >
              Questions about an order, a fit, or a collaboration? Send us a
              note — a real person reads every one.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            <div className="flex items-center gap-3">
              <Mail size={18} style={{ color: "#7C8467" }} />
              <span className="text-sm">hello@bumandastore.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} style={{ color: "#7C8467" }} />
              <span className="text-sm">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram size={18} style={{ color: "#7C8467" }} />
              <span className="text-sm">@bumandastore</span>
            </div>
          </div>
        </div>

        {/* Right column — the "garment label" form card */}
        <div className="relative">
          <div
            className="absolute -top-3 left-8 px-4 py-1 text-xs uppercase tracking-widest"
            style={{
              backgroundColor: "#201D1A",
              color: "#F7F3EC",
              letterSpacing: "0.15em",
            }}
          >
            Get in touch
          </div>

          <div
            className="border p-8 md:p-10 pt-12"
            style={{
              borderColor: "#DCD4C7",
              borderWidth: "1.5px",
              backgroundColor: "#FFFDF9",
            }}
          >
            {status === "sent" ? (
              <div className="py-16 text-center">
                <p
                  className="text-2xl mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Message sent.
                </p>
                <p className="text-sm" style={{ color: "#4A453F" }}>
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#7C8467", letterSpacing: "0.1em" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-transparent border-b py-2 text-base outline-none focus:border-b-2 transition-all"
                    style={{ borderColor: "#DCD4C7" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#7C8467", letterSpacing: "0.1em" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b py-2 text-base outline-none focus:border-b-2 transition-all"
                    style={{ borderColor: "#DCD4C7" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#7C8467", letterSpacing: "0.1em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full bg-transparent border-b py-2 text-base outline-none focus:border-b-2 transition-all resize-none"
                    style={{ borderColor: "#DCD4C7" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 mt-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#201D1A",
                    color: "#F7F3EC",
                    letterSpacing: "0.15em",
                  }}
                >
                  Send message
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
