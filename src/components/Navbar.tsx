import { useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO = "/__l5e/assets-v1/e2f955b5-481a-4942-bf12-35c65f5b1a48/logo.png";

const links = [
  { href: "#home", label: "হোম" },
  { href: "#about", label: "আমাদের সম্পর্কে" },
  { href: "#services", label: "সেবা" },
  { href: "#portfolio", label: "পোর্টফোলিও" },
  { href: "#gallery", label: "ফটো গ্যালারি" },
  { href: "#videos", label: "ভিডিও গ্যালারি" },
  { href: "#team", label: "টিম" },
  { href: "#packages", label: "প্যাকেজ" },
  { href: "#contact", label: "যোগাযোগ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img src={LOGO} alt="Dream Of Memories লোগো" className="h-10 w-auto" />
          <span className="text-xl font-bold gold-text">Dream Of Memories</span>
        </a>
        <div className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="মেনু">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
