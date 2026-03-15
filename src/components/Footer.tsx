import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/interior-painting" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <span className="text-xl font-extrabold tracking-tight text-white">Christine&apos;s <span className="text-accent">Pristine</span></span>
              <span className="ml-2 text-xs font-medium tracking-widest text-gray-400 uppercase">Painting</span>
            </Link>
            <p className="mb-3 text-base leading-relaxed text-gray-300">Transforming homes with pristine finishes</p>
            <p className="text-sm text-gray-400">Serving Northwest Alabama &amp; beyond</p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/christinespristinepainting" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 transition-colors hover:text-accent">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+12055705579" className="text-sm text-gray-300 transition-colors hover:text-accent">(205) 570-5579</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm text-gray-300">Hamilton, AL 35570</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center text-xs text-gray-400 sm:flex-row sm:justify-between lg:px-8">
          <span>&copy; {new Date().getFullYear()} Christine&apos;s Pristine Painting. All rights reserved.</span>
          <span>Hamilton, AL &amp; surrounding areas</span>
        </div>
      </div>
    </footer>
  );
}
