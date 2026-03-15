"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Painting & Refinishing",
  "Countertop Painting",
  "Furniture Refinishing",
  "Epoxy & Specialty Work",
  "Drywall Repair",
  "Stair Painting/Staining",
  "Other",
] as const;

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left info card */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 rounded-3xl bg-primary p-8 text-white shadow-xl sm:p-10">
              {/* Decorative accent */}
              <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-light" />

              <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight">
                Let&apos;s Make It Pristine
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Ready to transform your space? Get in touch with Christine for a
                free, no-obligation estimate. She&apos;ll personally assess your
                project and provide honest, upfront pricing.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-5 w-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Phone
                    </p>
                    <a
                      href="tel:+12055705579"
                      className="mt-1 text-base font-semibold text-white transition-colors hover:text-accent-light"
                    >
                      (205) 570-5579
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-5 w-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Location
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      Hamilton, AL 35570
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-5 w-5 text-accent-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Hours
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Mon-Fri: 9am - 5pm
                    </p>
                    <p className="text-sm text-white/60">Sat: 7am - 12pm</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                  Follow Us
                </p>
                <a
                  href="https://www.facebook.com/CPPservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-accent/30 hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  @CPPservices
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Free Estimate
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl">
                Get Your Free Quote
              </h2>
              <p className="mt-3 text-gray-500">
                Fill out the form and Christine will get back to you within 24
                hours with a detailed estimate.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
                <svg
                  className="mx-auto mb-4 h-14 w-14 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-green-800">
                  Thank You!
                </h3>
                <p className="mt-2 text-green-700">
                  Your estimate request has been submitted. Christine will get
                  back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-green-700 underline underline-offset-4 hover:text-green-900"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-10"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-semibold text-primary"
                    >
                      First Name{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-semibold text-primary"
                    >
                      Last Name{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-primary"
                    >
                      Phone{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(205) 555-1234"
                      className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-primary"
                    >
                      Email{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    Service Needed{" "}
                    <span className="text-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-accent to-accent-light px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : "Request Free Estimate"}
                </button>
                <p className="mt-4 text-center text-xs text-gray-400">
                  Free estimates with no obligation. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
