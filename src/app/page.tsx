import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    name: "Interior Walls & Ceilings",
    description: "Complete interior transformations with flawless finishes. Walls, ceilings, accent walls, and detailed edge work that makes every room feel brand new.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    name: "Trim & Door Painting",
    description: "Crisp, clean lines on baseboards, crown molding, door frames, and doors. The finishing touches that elevate your entire home.",
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80",
  },
  {
    name: "Cabinet Painting",
    description: "Transform your kitchen or bathroom with a flawless factory finish. No need for costly replacements when Christine can make your cabinets look brand new.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    name: "Furniture Refinishing",
    description: "Breathe new life into cherished heirlooms and antiques. From your grandmother's dining set to a vintage dresser, Christine restores them to their former glory.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
];

const reviews = [
  {
    name: "Ronda Branham",
    text: "Christine's work is exquisite! She's done our house in Fort Walton Beach, as well as my grandmother's 75 year old dining room furniture.",
    source: "Google",
  },
  {
    name: "Whitney Franks",
    text: "Christine was amazing. She came when she said she was going to, reasonably priced, picked up after herself & very attentive to details.",
    source: "Google",
  },
  {
    name: "Ron McDonald",
    text: "If there's a blemish I haven't found it. She did an exterior door and a 50 year old ceiling and the results speak for themselves.",
    source: "Google",
  },
  {
    name: "Michael Brisbois",
    text: "Done a excellent job for my grandparents. Definitely would recommend her to anyone looking for quality painting work.",
    source: "Google",
  },
];

const faqItems = [
  {
    question: "What areas does Christine serve?",
    answer: "Christine primarily serves Hamilton, Sulligent, Winfield, and surrounding areas in Northwest Alabama. She also takes on projects in Artesia, MS and Fort Walton Beach, FL for larger jobs.",
  },
  {
    question: "How does Christine's cabinet painting process work?",
    answer: "Christine carefully preps each cabinet with thorough cleaning, sanding, and priming before applying a durable, factory-quality finish. The process is done in place without removing cabinets, saving time and reducing disruption to your home.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! All estimates are completely free with no obligation. Contact Christine and she'll schedule a convenient time to assess your project and provide a detailed quote.",
  },
  {
    question: "How long does a typical painting project take?",
    answer: "Most interior rooms can be completed in 1-2 days. Full home interiors typically take 3-5 days. Cabinet refinishing usually takes 3-5 days depending on the kitchen size. Christine will provide a timeline during your estimate.",
  },
  {
    question: "Can Christine restore antique or heirloom furniture?",
    answer: "Absolutely! Christine specializes in breathing new life into cherished furniture pieces, from 75-year-old dining room sets to vintage dressers. She takes special care with antiques to preserve their character while giving them a beautiful new finish.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Christine accepts Zelle for convenient, secure payments. Payment details will be discussed during your estimate consultation.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Beautiful painted living room interior" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Freshly painted white kitchen cabinets" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", alt: "Elegant bedroom with fresh paint" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: "Modern living room with professional paint job" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "Refinished furniture piece" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", alt: "Modern interior with clean paint lines" },
  { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80", alt: "Professional painter at work" },
  { src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80", alt: "Detail trim and molding work" },
];

const serviceAreas = [
  "Hamilton, AL",
  "Sulligent, AL",
  "Winfield, AL",
  "Artesia, MS",
  "Fort Walton Beach, FL",
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

      {/* ===== HERO - Full Bleed Background Image ===== */}
      <section className="hero-section relative flex min-h-screen items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Google badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              {/* Google G icon */}
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-white">
                5.0 &#9733; Rated on Google
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Christine&apos;s Pristine Painting
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Hamilton, Alabama&apos;s Trusted Interior Painting Specialist. From hand-painted cabinets to heirloom furniture restoration, every project gets an artist&apos;s eye and meticulous attention to detail.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.98]"
              >
                Get Your Free Estimate
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+12055705579"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-[0.98]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (205) 570-5579
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="relative z-10 bg-primary py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 lg:gap-16">
          {[
            { icon: "star", text: "5-Star Google Rating" },
            { icon: "camera", text: "20+ Yelp Photos" },
            { icon: "shield", text: "Licensed & Insured" },
            { icon: "check", text: "Free Estimates" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              {item.icon === "star" && (
                <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
              {item.icon === "camera" && (
                <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              {item.icon === "shield" && (
                <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              {item.icon === "check" && (
                <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="text-sm font-semibold text-white/90">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICE CARDS WITH IMAGES ===== */}
      <section id="services" className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Signature Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              From kitchen cabinets to antique furniture, Christine delivers precision craftsmanship on every surface
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="service-card group relative h-80 overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              The Transformation
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Before &amp; After
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              See the dramatic difference a professional paint job makes
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                alt="Room before professional painting"
                loading="lazy"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="absolute top-4 left-4 rounded-full bg-red-500/90 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white">
                Before
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                alt="Room after Christine's professional painting"
                loading="lazy"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="absolute top-4 left-4 rounded-full bg-green-500/90 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent-light">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Vision to Pristine
            </h2>
          </div>
          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line */}
            <div className="absolute top-12 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-accent-light/30 to-transparent lg:block" />

            {[
              { step: "01", title: "Consultation", desc: "Christine visits your home, listens to your vision, and provides a detailed free estimate." },
              { step: "02", title: "Color Selection", desc: "Expert guidance on choosing the perfect palette that complements your space and style." },
              { step: "03", title: "Expert Execution", desc: "Meticulous preparation and flawless application with attention to every edge and corner." },
              { step: "04", title: "Pristine Reveal", desc: "A thorough walkthrough to ensure every detail meets Christine's exacting standards." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent-light/30 bg-primary-light shadow-lg">
                  <span className="font-[family-name:var(--font-heading)] text-3xl text-accent-light">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT CHRISTINE ===== */}
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Photo / Card side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl sm:p-12">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-accent/10 to-transparent" />
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-primary/5 to-transparent" />

              <div className="relative text-center">
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-accent/20 shadow-lg">
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/nvXYI7GRL-0hF0nAGM32fA/l.jpg"
                    alt="Christine Duke Miller - Owner of Christine's Pristine Painting"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary">
                  Christine Duke Miller
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">
                  Owner & Lead Artisan
                </p>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  With an artist&apos;s eye for detail and a craftsman&apos;s dedication to quality,
                  Christine has built her reputation one pristine finish at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Meet Christine
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl">
              The Artist Behind Every Pristine Finish
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Christine Duke Miller doesn&apos;t just paint walls. She transforms spaces. Whether
                it&apos;s restoring your grandmother&apos;s 75-year-old dining room furniture or giving
                your kitchen cabinets a factory-fresh finish, Christine brings a level of care and
                precision that her clients describe as &ldquo;exquisite.&rdquo;
              </p>
              <p>
                Based in Hamilton, Alabama, Christine serves homeowners across Northwest Alabama and
                beyond. Her versatility is what sets her apart: interior painting, cabinet
                refinishing, furniture restoration, and more. One call truly covers it all.
              </p>
              <p>
                As a women-owned business, Christine&apos;s Pristine Painting brings a personal touch
                that larger companies simply can&apos;t match. You work directly with Christine from the
                first consultation to the final pristine reveal.
              </p>
            </div>
            <div className="mt-8 flex gap-6">
              <div className="rounded-xl bg-white px-6 py-4 text-center shadow-sm">
                <p className="font-[family-name:var(--font-heading)] text-2xl text-primary">5.0</p>
                <p className="text-xs font-medium text-gray-400">Stars</p>
              </div>
              <div className="rounded-xl bg-white px-6 py-4 text-center shadow-sm">
                <p className="font-[family-name:var(--font-heading)] text-2xl text-primary">100%</p>
                <p className="text-xs font-medium text-gray-400">Satisfaction</p>
              </div>
              <div className="rounded-xl bg-white px-6 py-4 text-center shadow-sm">
                <p className="font-[family-name:var(--font-heading)] text-2xl text-accent">Women</p>
                <p className="text-xs font-medium text-gray-400">Owned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS WIDGET ===== */}
      <section id="reviews" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Google Reviews Header Widget */}
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-md">
              <svg className="h-10 w-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">5.0</span>
                  <span className="text-lg text-gray-500">out of 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span className="text-sm text-gray-400">Based on 4 reviews</span>
                </div>
              </div>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10"
              >
                {/* Google icon in corner */}
                <div className="absolute top-4 right-4">
                  <svg className="h-6 w-6 opacity-30" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>

                <div className="relative">
                  <Stars count={5} />
                  <p className="mt-5 text-base leading-relaxed text-gray-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                    {/* Avatar circle with initial */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-base font-bold text-primary">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.source} Review</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Photo Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              Browse our portfolio of completed projects across Northwest Alabama
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item group relative overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64"
                />
                <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent-light">
              The Pristine Difference
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Choose Christine
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Attention to Detail",
                desc: "Every edge, every corner, every surface painted to perfection. If there's a blemish, you won't find it.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Women-Owned",
                desc: "A personal, boutique experience. You work directly with Christine from your first call to the final reveal.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "Clean Worksite",
                desc: "Christine picks up after herself, protects your furniture and floors, and leaves your home spotless.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: "Affordable Pricing",
                desc: "Premium quality at fair, honest prices. Christine provides transparent quotes with no hidden fees or surprises.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
              >
                <div className="mb-5 text-accent-light">{item.icon}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Coverage Area
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl">
            Proudly Serving
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Professional painting and refinishing across Northwest Alabama, Mississippi, and Florida
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-primary/15 bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <ContactForm />
    </>
  );
}
