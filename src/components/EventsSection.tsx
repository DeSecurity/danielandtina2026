import { useState } from "react";
import { Calendar, MapPin, Clock, ChevronDown } from "lucide-react";

const events = [
  {
    title: "Mehndi",
    pa: "ਮਹਿੰਦੀ",
    desc: "Traditional henna ceremony for the bride",
    date: "July 21, 2026",
    time: "4:00 PM",
    location: "29108 144th Ave SE, Auburn, WA, 98030",
    calendarDates: "20260721T160000/20260721T190000",
    details: [
      "Attire: Colorful & festive! Think bright outfits; flowy dresses/skirts work perfect.",
      "What to Expect: This is a fun, relaxed event where henna is applied to the bride and guests. There will be music, mingling, and lots of fun!",
      "Pro tip: Wear something you don't mind being careful in, henna takes 20-30 mins to dry.",
    ],
  },
  {
    title: "Jaggo",
    pa: "ਜੱਗੋ",
    desc: "Traditional Punjabi ceremony with singing and dancing",
    date: "July 22, 2026",
    time: "6:00 PM–11:00 PM",
    location: "Kent Event Center, 10120 Southeast 260th Street Unit 121, Kent, WA, 98030",
    calendarDates: "20260722T180000/20260722T230000",
    details: [
      "Attire: Bright, bold, and ready to party!",
      "What to Expect: This is one of the most energetic events of the wedding. It's a pre-wedding celebration with dancing, music, and high energy. Expect loud music, lots of dancing, and a full-on party!",
    ],
  },
  {
    title: "Haldi",
    pa: "ਹਲਦੀ",
    desc: "Turmeric ceremony",
    date: "July 23, 2026",
    time: "11:00 AM",
    location: "29108 144th Ave SE, Auburn, WA, 98030",
    calendarDates: "20260723T110000/20260723T140000",
    details: [
      "Attire: Wear yellow, gold, or light/bright colors. Think summer dresses/skirts.",
      "A traditional ceremony where turmeric paste (haldi) is applied to the bride and groom for good luck and glowing skin. Guests will also be invited to come up and apply a small amount of haldi, so be ready to join in and be part of the tradition. It is fun, interactive, and playful.",
      "Afterwards, the choora ceremony takes place, where the bride's bangles are placed on her by her family as a symbol of blessings, love, and a new chapter. This portion is more intimate.",
    ],
  },
  {
    title: "Wedding Ceremony",
    pa: "ਵਿਆਹ",
    desc: "The main wedding ceremony — Anand Karaj",
    date: "July 24, 2026",
    time: "9:30 AM",
    location: "Gurudwara Sacha Marg Sahib, 12431 SE 286th Pl, Auburn, WA, 98092",
    calendarDates: "20260724T093000/20260724T143000",
    details: [
      "Attire: Traditional Indian attire encouraged, but not required. Modest clothing is most important, please ensure shoulders, chest, and legs are covered.",
      "Head Covering: All guests must cover their heads inside the temple. We will be providing head coverings for everyone; sage green for the groom's side and dusty rose for the bride's side!",
      "Shoes: Shoes must be removed before entering the temple.",
      "What to Expect: The ceremony (Anand Karaj) will take place inside the temple. Guests will be seated on the floor during the ceremony.",
      "The ceremony includes prayers, live hymns, and the couple walking around the Guru Granth Sahib. We kindly ask that guests remain seated throughout.",
      "After the ceremony, all guests are invited to enjoy a traditional vegetarian meal (langar).",
      "Afterwards, we'll continue the celebration at the bride's home, where there will be fun post-wedding games and traditions. Guests are welcome to join us and experience a more playful side of the celebration.",
    ],
  },
  { title: "Reception", pa: "ਰਿਸੈਪਸ਼ਨ", desc: "Celebration dinner and dancing", date: "July 25, 2026", time: "6:00 PM", location: "Lakewood, WA", calendarDates: "20260725T180000/20260725T230000", details: [] },
];

const getCalendarUrl = (event: (typeof events)[number]) => {
  const details = [event.desc, ...event.details].join("\n\n");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: event.calendarDates,
    ctz: "America/Los_Angeles",
    location: event.location,
    details,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const EventsSection = () => {
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  return (
    <section id="events" className="py-24 bg-sage-light/50 px-4">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="font-display text-4xl text-foreground">Wedding Events</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਮੰਗਲ ਸਮਾਗਮ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">Join us for a week of celebration, traditions, and joy</p>
    </div>
    <div className="max-w-3xl mx-auto grid gap-6">
      {events.map((e) => {
        const isOpen = openEvent === e.title;

        return (
        <button
          key={e.title}
          type="button"
          onClick={() => setOpenEvent(isOpen ? null : e.title)}
          className="w-full text-left bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-1">
              <h3 className="font-display text-2xl text-foreground">{e.title}</h3>
              <p className="font-display text-sm text-secondary italic">{e.pa}</p>
              <p className="font-body text-sm text-muted-foreground mt-2">{e.desc}</p>
            </div>
            <div className="text-right space-y-1 shrink-0">
              <div className="flex items-center gap-2 text-primary text-sm font-body justify-end">
                <a
                  href={getCalendarUrl(e)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="rounded-full p-1 -m-1 transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-label={`Add ${e.title} to calendar`}
                >
                  <Calendar size={14} />
                </a>
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
              <ChevronDown className={`ml-auto mt-3 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} size={18} />
            </div>
          </div>
          {isOpen && e.details.length > 0 && (
            <div className="mt-5 border-t border-border pt-5 space-y-3 font-body text-sm leading-relaxed text-muted-foreground">
              {e.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          )}
        </button>
        );
      })}
    </div>
    <p className="text-center text-xs text-muted-foreground mt-8 font-body">All events are subject to change. We'll keep you updated with final details closer to the dates.</p>
  </section>
  );
};

export default EventsSection;
