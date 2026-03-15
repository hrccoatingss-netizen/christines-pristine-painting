import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    name: "Cabinet Painting & Refinishing",
    description: "Transform your kitchen or bathroom with a flawless factory finish. No need for costly replacements when Christine can make your cabinets look brand new.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Furniture Restoration",
    description: "Breathe new life into cherished heirlooms and antiques. From your grandmother's dining set to a vintage dresser, Christine restores them to their former glory.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    name: "Interior Painting",
    description: "Complete interior transformations with flawless finishes. Walls, ceilings, trim, accent walls, and detailed edge work that makes every room feel brand new.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Exterior Painting",
    description: "Boost curb appeal with durable exterior coatings that protect your home against Alabama's heat, humidity, and storms. Built to last, painted to impress.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Countertop Painting",
    description: "Transform outdated countertops with a stunning, durable painted finish at a fraction of the cost of full replacement. Modern looks without the renovation hassle.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    name: "Epoxy & Specialty Work",
    description: "Custom epoxy tables, stair painting and staining, drywall repair, and specialty finishes. If it can be painted or refinished, Christine can make it pristine.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
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
    source: "Yelp",
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
        <svg key={i} className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
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

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
        {/* Decorative SVG paint strokes */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
          <svg className="absolute -top-20 -right-20 h-[600px] w-[600px] text-accent" viewBox="0 0 200 200" fill="currentColor">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-58.1,79.6,-44.2C87.4,-30.3,90,-13.6,88.3,2.3C86.5,18.2,80.4,33.3,70.8,45.5C61.2,57.7,48.1,67,34.1,73.1C20.1,79.2,5.2,82.1,-10.3,80.6C-25.8,79.1,-41.9,73.2,-54.5,63.4C-67.1,53.6,-76.2,39.8,-81.2,24.5C-86.2,9.2,-87.1,-7.6,-82.5,-22.5C-77.9,-37.4,-67.8,-50.4,-55,-59.2C-42.2,-68,-26.7,-72.6,-11,-72.1C4.7,-71.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -bottom-32 -left-32 h-[500px] w-[500px] text-white" viewBox="0 0 200 200" fill="currentColor">
            <path d="M39.5,-65.3C52.9,-60.7,67.1,-53.6,74.8,-42C82.5,-30.4,83.7,-15.2,82.2,-0.9C80.7,13.4,76.5,26.8,68.8,37.8C61.1,48.8,49.9,57.4,37.5,63.1C25.1,68.8,11.6,71.6,-2.3,75.4C-16.2,79.2,-30.4,84,-42.4,79.6C-54.4,75.2,-64.2,61.6,-71.1,47C-78,32.4,-82,16.2,-81.3,0.4C-80.6,-15.4,-75.2,-30.8,-66.1,-42.4C-57,-54,-44.2,-61.8,-31.1,-66.6C-18,-71.4,-4.5,-73.2,5,-68.2C14.5,-63.2,26.1,-69.9,39.5,-65.3Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-6 py-2.5 backdrop-blur-sm">
              <svg className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-accent-light">
                5.0 Rated &nbsp;|&nbsp; Women-Owned
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-[family-name:var(--font-heading)] text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pristine Results,{" "}
              <span className="relative">
                Every Time
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent to-accent-light" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              From hand-painted cabinets to heirloom furniture restoration, Christine brings an
              artist&apos;s eye and meticulous attention to detail to every project she touches.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.98]"
              >
                Get Your Free Quote
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
                Call Christine
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/15 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">5.0 Perfect Rating</span>
              </div>
              <div className="hidden h-5 w-px bg-white/25 sm:block" />
              <span className="hidden text-sm text-white/60 sm:inline">
                Trusted across <strong className="text-white">4+ counties</strong>
              </span>
              <div className="hidden h-5 w-px bg-white/25 sm:block" />
              <span className="hidden text-sm text-white/60 lg:inline">
                <strong className="text-white">Google</strong> &amp; <strong className="text-white">Yelp</strong> verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative z-10 -mt-1 bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { number: "5.0", label: "Star Rating", sub: "Everywhere" },
            { number: "4+", label: "Counties Served", sub: "AL, MS & FL" },
            { number: "100%", label: "Satisfaction", sub: "Guaranteed" },
            { number: "Detail", label: "Oriented", sub: "Every project" },
          ].map((stat) => (
            <div key={stat.label} className="relative text-center">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-light" />
              <p className="font-[family-name:var(--font-heading)] text-4xl text-primary sm:text-5xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-primary/80">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SIGNATURE SERVICES ===== */}
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Gold gradient top border */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-light group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              From Vision to Pristine
            </h2>
          </div>
          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line */}
            <div className="absolute top-12 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

            {[
              { step: "01", title: "Consultation", desc: "Christine visits your home, listens to your vision, and provides a detailed free estimate." },
              { step: "02", title: "Color Selection", desc: "Expert guidance on choosing the perfect palette that complements your space and style." },
              { step: "03", title: "Expert Execution", desc: "Meticulous preparation and flawless application with attention to every edge and corner." },
              { step: "04", title: "Pristine Reveal", desc: "A thorough walkthrough to ensure every detail meets Christine's exacting standards." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent/20 bg-white shadow-sm">
                  <span className="font-[family-name:var(--font-heading)] text-3xl text-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
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
              {/* Decorative corner accent */}
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
                beyond. Her versatility is what sets her apart: interior and exterior painting, cabinet
                refinishing, countertop transformations, furniture restoration, custom epoxy work, and
                more. One call truly covers it all.
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

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-tight text-primary sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              5.0 stars on every platform. Read the reviews that speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-10"
              >
                {/* Gold quote mark */}
                <div className="absolute -top-2 -left-2 font-[family-name:var(--font-heading)] text-8xl leading-none text-accent/10">
                  &ldquo;
                </div>
                <div className="relative">
                  <Stars count={5} />
                  <p className="mt-5 text-base leading-relaxed text-gray-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                    <div>
                      <p className="text-base font-bold text-primary">{review.name}</p>
                      <p className="text-xs text-gray-400">Verified Customer</p>
                    </div>
                    <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {review.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="bg-primary py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
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
                className="rounded-full border border-primary/15 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
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
