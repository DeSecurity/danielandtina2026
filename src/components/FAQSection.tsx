import { Mail } from "lucide-react";

const faqs = [
  {
    question: "What is the dress code?",
    answer: "Traditional attire is encouraged — Lehenga, Salwar Kameez, Saree, Sherwani, or Kurta Pajama. Elegant formal wear is also welcome. Please avoid white, cream, or red.",
  },
  {
    question: "What time should I arrive?",
    answer: "Please arrive 15–30 minutes before the listed start time for each event to allow time for seating and settling in.",
  },
  {
    question: "How do I RSVP or ask a question?",
    answer: "Please email us at rsvp@danielandtina2026.com for RSVPs, questions, or any special accommodations.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-sage-light/50 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">Frequently Asked Questions</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ</p>
      <div className="section-divider" />
    </div>
    <div className="max-w-2xl mx-auto space-y-6">
      {faqs.map((f, i) => (
        <div key={i} className="bg-background rounded-xl p-6 border border-border">
          <h3 className="font-display text-lg text-foreground mb-2">{f.question}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
        </div>
      ))}
    </div>
    <div className="max-w-md mx-auto text-center mt-10">
      <a href="mailto:rsvp@danielandtina2026.com" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline">
        <Mail size={14} />
        rsvp@danielandtina2026.com
      </a>
    </div>
  </section>
);

export default FAQSection;
