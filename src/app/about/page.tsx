import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Christine's Pristine Painting",
  description: "Meet Christine Duke Miller. Professional painting, cabinet refinishing, and furniture restoration in Hamilton, AL.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">About Christine&apos;s Pristine Painting</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Passion, precision, and pristine results on every project.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-gray-600 leading-relaxed text-lg">
          <p><strong className="text-primary">Christine Duke Miller</strong> is the heart and soul behind Christine&apos;s Pristine Painting. Based in Hamilton, Alabama, Christine has built her business on a simple promise: every project gets a pristine finish, every time.</p>
          <p>What started as a passion for transforming spaces has grown into a trusted local business serving homeowners across Northwest Alabama. Christine&apos;s versatility sets her apart. From full interior and exterior painting to cabinet refinishing, countertop transformations, and furniture restoration, she handles it all with the same meticulous attention to detail.</p>
          <p>Christine believes that a fresh coat of paint or a beautifully refinished piece can completely change the feel of a home. She works directly with every client to understand their vision and delivers results that consistently earn perfect 5-star reviews.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[{ n: "5.0", l: "Star Rating" }, { n: "266+", l: "FB Followers" }, { n: "20+", l: "Yelp Photos" }, { n: "100%", l: "Satisfaction" }].map((s) => (
            <div key={s.l} className="rounded-xl bg-gray-light p-6 text-center">
              <p className="text-3xl font-extrabold text-primary">{s.n}</p>
              <p className="mt-1 text-xs font-medium text-gray-500">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
