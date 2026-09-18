

import { useState } from "react";

const inputClass =
  "w-full h-12 rounded-lg border border-softgrey bg-white px-4 text-sm text-teal-900 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors";

const labelClass = "block text-sm font-sans text-teal-900 mb-1.5";

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-teal-100 border border-teal/20 rounded-xl p-6 sm:p-8 text-center">
        <p className="font-display font-semibold text-xl text-teal">Thank you â€” we've received your enquiry</p>
        <p className="text-sm text-teal-900/70 mt-2">
          Our team will reach out within 24 hours. For anything urgent, WhatsApp or call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      <div>
        <label className={labelClass} htmlFor="name">Full name</label>
        <input required id="name" name="name" placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone number</label>
        <input required id="phone" name="phone" placeholder="+91 " className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="name@email.com" className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="city">City</label>
        <input id="city" name="city" placeholder="Coimbatore" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="projectType">Project type</label>
        <select id="projectType" name="projectType" className={inputClass}>
          <option>Residential â€” Apartment</option>
          <option>Residential â€” Villa / Independent Home</option>
          <option>Modular Kitchen</option>
          <option>Office Interiors</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">Tell us about your project</label>
        <textarea id="message" name="message" rows={4} placeholder="A little about your space and what you're looking for" className={`${inputClass} h-auto py-3`} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto font-button font-semibold text-xs uppercase tracking-wide bg-gold text-teal-900 px-8 py-4 rounded hover:bg-gold-800 hover:text-warmwhite transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Book a Consultation"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600 mt-2">Something went wrong â€” please try again or WhatsApp us directly.</p>
        )}
      </div>
    </form>
  );
}
