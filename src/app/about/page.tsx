import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Christine's Pristine Painting",
  description:
    "Meet Christine Duke Miller. Professional painting, cabinet refinishing, and furniture restoration in Hamilton, AL.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-[0.07]">
          <svg
            className="absolute -top-20 -right-20 h-[500px] w-[500px] text-accent"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path
              d="M44.7,-76.4C58.8,-69.2,71.8,-58.1,79.6,-44.2C87.4,-30.3,90,-13.6,88.3,2.3C86.5,18.2,80.4,33.3,70.8,45.5C61.2,57.7,48.1,67,34.1,73.1C20.1,79.2,5.2,82.1,-10.3,80.6C-25.8,79.1,-41.9,73.2,-54.5,63.4C-67.1,53.6,-76.2,39.8,-81.2,24.5C-86.2,9.2,-87.1,-7.6,-82.5,-22.5C-77.9,-37.4,-67.8,-50.4,-55,-59.2C-42.2,-68,-26.7,-72.6,-11,-72.1C4.7,-71.6,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-light">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Christine&apos;s Pristine Painting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Passion, precision, and pristine results on every project.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-5">
          {/* Photo card */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 overflow-hidden rounded-3xl bg-surface p-8 shadow-lg sm:p-10">
              <div className="relative text-center">
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-accent/20 shadow-lg">
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/nvXYI7GRL-0hF0nAGM32fA/l.jpg"
                    alt="Christine Duke Miller"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary">
                  Christine Duke Miller
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">
                  Owner & Lead Artisan
                </p>
                <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { n: "5.0", l: "Stars" },
                  { n: "100%", l: "Satisfaction" },
                  { n: "4+", l: "Counties" },
                  { n: "Women", l: "Owned" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl bg-white px-4 py-3 text-center shadow-sm"
                  >
                    <p className="font-[family-name:var(--font-heading)] text-xl text-primary">
                      {s.n}
                    </p>
                    <p className="text-xs font-medium text-gray-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong className="text-primary">
                  Christine Duke Miller
                </strong>{" "}
                is the heart and soul behind Christine&apos;s Pristine Painting.
                Based in Hamilton, Alabama, Christine has built her business on a
                simple promise: every project gets a pristine finish, every time.
              </p>
              <p>
                What started as a passion for transforming spaces has grown into
                a trusted local business serving homeowners across Northwest
                Alabama and beyond. Christine&apos;s versatility sets her apart.
                From full interior and exterior painting to cabinet refinishing,
                countertop transformations, furniture restoration, and custom
                epoxy work, she handles it all with the same meticulous attention
                to detail.
              </p>
              <p>
                Her clients describe her work as &ldquo;exquisite&rdquo; and her
                results as &ldquo;pristine.&rdquo; Whether it&apos;s restoring a
                grandmother&apos;s 75-year-old dining room furniture or
                refinishing a 50-year-old ceiling, Christine brings an
                artist&apos;s eye and a craftsman&apos;s dedication to every
                project.
              </p>
              <p>
                Christine believes that a fresh coat of paint or a beautifully
                refinished piece can completely change the feel of a home. She
                works directly with every client to understand their vision and
                delivers results that consistently earn perfect 5-star reviews.
              </p>
              <p>
                As a women-owned business, Christine&apos;s Pristine Painting
                brings a personal, boutique experience that larger companies
                can&apos;t match. When you choose Christine, you get her
                undivided attention from the first phone call to the final
                pristine reveal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
