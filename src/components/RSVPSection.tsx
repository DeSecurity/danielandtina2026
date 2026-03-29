import { Mail, Phone } from "lucide-react";

const RSVPSection = () => (
  <section id="rsvp" className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">RSVP</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਜਵਾਬ ਦਿਓ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">We can't wait to celebrate with you!</p>
    </div>
    <div className="max-w-lg mx-auto bg-accent/40 rounded-xl p-10 text-center">
      <h3 className="font-display text-2xl text-foreground mb-2">Please Respond by June 1, 2026</h3>
      <p className="font-body text-sm text-muted-foreground mb-6">Help us plan the perfect celebration by confirming your attendance</p>
      <button className="font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-10 py-3 hover:opacity-90 transition-opacity">RSVP Now</button>
      <div className="mt-8 space-y-3 text-sm text-muted-foreground font-body">
        <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-primary" /> rsvp@danielandtina2026.com</p>
        <p className="flex items-center justify-center gap-2"><Phone size={14} className="text-primary" /> (123) 456-7890</p>
      </div>
    </div>
    <div className="max-w-md mx-auto text-center mt-8">
      <p className="font-display text-base italic text-muted-foreground">"ਸਾਡੇ ਨਾਲ ਜਸ਼ਨ ਮਨਾਓ" — Celebrate with us</p>
    </div>
  </section>
);

export default RSVPSection;
