import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Details", href: "#details" },
  { label: "Registry", href: "#registry" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Gallery", href: "#gallery" },
  { label: "Music", href: "#music" },
  { label: "Guestbook", href: "#guestbook" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-display text-xl text-primary tracking-wide">D &amp; T</a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
