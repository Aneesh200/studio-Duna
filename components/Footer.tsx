import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white/40 py-10 md:py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 md:gap-8 md:flex-row md:justify-between md:items-end">
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl text-white mb-2">DUNA</h2>
          <p className="text-xs uppercase tracking-widest">Studio</p>
        </div>
        <div className="flex flex-row justify-center md:justify-start gap-10 md:gap-16 text-xs uppercase tracking-widest">
          <Link
            href="/contact"
            className="hover:text-white transition-colors py-2 -my-2 min-w-[44px] text-center touch-manipulation"
          >
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/a.dunaofficial?igsh=d2l2MnllMjljNzk1"
            className="hover:text-white transition-colors py-2 -my-2 min-w-[44px] text-center touch-manipulation"
          >
            Instagram
          </Link>
        </div>
        <div className="text-xs font-light text-center md:text-right">
          © 2026 DunaStudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
