import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    name: "Interior Painting",
    description: "Complete interior transformations with flawless finishes. Walls, ceilings, trim, and accent walls.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
  },
  {
    name: "Exterior Painting",
    description: "Boost your curb appeal with durable exterior coatings that protect against Alabama's weather.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
  },
  {
    name: "Cabinet Refinishing",
    description: "Give your kitchen or bathroom a brand-new look without the cost of full replacement.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
  },
  {
    name: "Countertop Painting",
    description: "Transform outdated countertops with a stunning, durable painted finish at a fraction of replacement cost.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />,
  },
  {
    name: "Furniture Refinishing",
    description: "Breathe new life into cherished furniture pieces with professional refinishing and custom colors.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />,
  },
  {
    name: "Color Consultation",
    description: "Not sure what color? Christine will help you choose the perfect palette for your space.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />,
  },
];

const reviews = [
  { name: "Amanda T.", stars: 5, text: "Christine painted our entire living room and kitchen. The attention to detail is amazing. Every edge, every corner is perfect. She truly takes pride in her work!" },
  { name: "Robert M.", stars: 5, text: "Had our kitchen cabinets refinished and they look brand new! Saved us thousands compared to replacing them. Christine is professional, clean, and her work is pristine." },
  { name: "Jennifer H.", stars: 5, text: "Christine refinished an antique dresser for us and it turned out absolutely beautiful. She has a real talent for bringing old furniture back to life. Highly recommend!" },
];

const faqItems = [
  { question: "What areas do you serve?", answer: "We primarily serve Hamilton, Sulligent, Winfield, Vernon, Hackleburg, and Bear Creek in Alabama. We also take on projects in Artesia, MS and Fort Walton Beach, FL." },
  { question: "Do you offer free estimates?", answer: "Yes! All estimates are completely free with no obligation. Contact us and we'll schedule a convenient time to assess your project." },
  { question: "Can you refinish kitchen cabinets without removing them?", answer: "Yes! Our cabinet refinishing process can be done in place without removing the cabinets. This saves time and reduces disruption to your home." },
  { question: "How long does a typical painting project take?", answer: "Most interior rooms can be completed in 1-2 days. Full home interiors typically take 3-5 days. Cabinet refinishing usually takes 3-5 days depending on the kitchen size." },
  { question: "Do you paint furniture?", answer: "Absolutely! We specialize in furniture refinishing, from antique restoration to modern custom paint jobs. Bring us your piece and we'll give it new life." },
  { question: "What kind of paint do you use?", answer: "We use high-quality, durable paints suited to each project. For cabinets and furniture, we use specialty finishes that are built to last and resist wear." },
];

const serviceAreas = ["Hamilton", "Sulligent", "Winfield", "Vernon", "Hackleburg", "Bear Creek", "Artesia", "Fort Walton Beach"];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} />

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-cream blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-5 py-2 text-sm font-bold text-accent">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Stars Everywhere
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pristine Painting &amp; Refinishing
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              From walls to cabinets to furniture, Christine delivers flawless
              finishes every time. Trusted by homeowners across Northwest Alabama.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-accent-dark active:scale-[0.98]">
                Get Your Free Estimate
              </Link>
              <a href="tel:+12055705579" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.98]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (205) 570-5579
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">{[1,2,3,4,5].map((i) => <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
                <span className="text-sm font-semibold text-white">5.0</span>
                <span className="text-sm text-white/60">rated</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span className="text-sm text-white/60"><strong className="text-white">Painting</strong> &amp; Refinishing</span>
              <div className="h-4 w-px bg-white/30 hidden sm:block" />
              <span className="hidden text-sm text-white/60 sm:inline"><strong className="text-white">Cabinets</strong> &amp; Furniture</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[{ number: "5.0", label: "Star Rating" }, { number: "266+", label: "Facebook Followers" }, { number: "100%", label: "Satisfaction" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-extrabold text-primary sm:text-6xl">{stat.number}</p>
              <p className="mt-2 text-lg font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-primary to-[#1E4A7A] py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">More Than Just Painting</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Cabinets, countertops, furniture, walls, and more. If it can be painted or refinished, Christine can make it pristine.
          </p>
          <Link href="#contact" className="mt-8 inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-accent-dark active:scale-[0.98]">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-cream p-12 shadow-lg">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-primary">Christine Duke Miller</h3>
              <p className="mt-1 text-sm font-medium text-accent">Owner &amp; Lead Painter</p>
              <p className="mt-4 text-gray-600 leading-relaxed">Passionate about transforming spaces with pristine finishes. Every project receives personal attention and care.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">The Pristine Difference</h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>Christine&apos;s Pristine Painting is more than just a painting company. Christine Duke Miller brings passion, precision, and a personal touch to every project, whether it&apos;s a full home interior, kitchen cabinets, or a cherished piece of furniture.</p>
              <p>Based in Hamilton, Alabama, Christine serves homeowners across Northwest Alabama and beyond. Her versatility in painting, refinishing, and restoration makes her the go-to choice for anyone looking to transform their space without breaking the bank.</p>
              <p>With perfect 5-star ratings on every platform, Christine&apos;s work speaks for itself. Clean, detailed, and always pristine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="gallery" className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">Professional painting and refinishing for every surface</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{service.icon}</svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Choose Christine&apos;s Pristine</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Pristine Finishes", desc: "Meticulous attention to detail on every project, every surface, every time" },
              { title: "Versatile Skills", desc: "Walls, cabinets, countertops, furniture, and more. One call covers it all" },
              { title: "5-Star Rated", desc: "Perfect ratings across Facebook, Yelp, and Google from satisfied customers" },
              { title: "Personal Touch", desc: "Owner-operated means you work directly with Christine from start to finish" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-light p-8 text-center shadow-sm transition hover:shadow-md">
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-3 text-lg text-gray-600">5.0 stars across all platforms</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <Stars count={review.stars} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-primary">{review.name}</p>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Areas We Serve</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">Professional painting services across Northwest Alabama and beyond</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />
    </>
  );
}
