import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  { title: "Mehndi", pa: "ਮਹਿੰਦੀ", desc: "Traditional henna ceremony for the bride", date: "July 21, 2026", time: "10:00 AM", location: "Auburn, WA" },
  { title: "Jaggo", pa: "ਜੱਗੋ", desc: "Traditional Punjabi ceremony with singing and dancing", date: "July 22, 2026", time: "6:30 PM", location: "Kent, WA" },
  { title: "Haldi", pa: "ਹਲਦੀ", desc: "Turmeric ceremony", date: "July 23, 2026", time: "11:00 AM", location: "Auburn, WA" },
  { title: "Wedding Ceremony", pa: "ਵਿਆਹ", desc: "The main wedding ceremony — Anand Karaj", date: "July 24, 2026", time: "9:00 AM", location: "Gurudwara, Auburn, WA" },
  { title: "Reception", pa: "ਰਿਸੈਪਸ਼ਨ", desc: "Celebration dinner and dancing", date: "July 25, 2026", time: "6:00 PM", location: "Lakewood, WA" },
];

const EventsSection = () => (
  <section id="events" className="py-24 bg-sage-light/50 px-4">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="font-display text-4xl text-foreground">Wedding Events</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਮੰਗਲ ਸਮਾਗਮ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">Join us for a week of celebration, traditions, and joy</p>
    </div>
    <div className="max-w-3xl mx-auto grid gap-6">
      {events.map((e) => (
        <div key={e.title} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-foreground">{e.title}</h3>
              <p className="font-display text-sm text-secondary italic">{e.pa}</p>
              <p className="font-body text-sm text-muted-foreground mt-2">{e.desc}</p>
            </div>
            <div className="text-right space-y-1 shrink-0">
              <div className="flex items-center gap-2 text-primary text-sm font-body justify-end">
                <Calendar size={14} />
                {e.date}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-body justify-end">
                <Clock size={12} />
                {e.time}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-body justify-end">
                <MapPin size={12} />
                {e.location}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-xs text-muted-foreground mt-8 font-body">All events are subject to change. We'll keep you updated with final details closer to the dates.</p>
  </section>
);

export default EventsSection;
