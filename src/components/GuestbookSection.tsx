const messages = [
  { name: "Sarah & Mike", date: "March 15, 2024", text: "We are so excited to celebrate your love! Wishing you both a lifetime of happiness. ❤️" },
  { name: "Priya Aunty", date: "March 14, 2024", text: "ਤੁਹਾਨੂੰ ਦੋਵਾਂ ਨੂੰ ਬਹੁਤ ਮੁਬਾਰਕ! May your marriage be blessed with love, joy, and prosperity. 🙏" },
  { name: "The Johnson Family", date: "March 13, 2024", text: "Can't wait to dance at your wedding! You two are perfect for each other." },
];

const GuestbookSection = () => (
  <section id="guestbook" className="py-24 bg-rose-light/20 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">Guestbook</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਮਹਿਮਾਨ ਦੀ ਕਿਤਾਬ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">Leave us a note of love, blessings, or well-wishes</p>
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <button className="font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-8 py-3 hover:opacity-90 transition-opacity">Open Guestbook Form</button>
      </div>
      <div className="space-y-6">
        {messages.map((m) => (
          <div key={m.name} className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-lg text-foreground">{m.name}</h4>
              <span className="font-body text-xs text-muted-foreground">{m.date}</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-md mx-auto text-center mt-12">
      <p className="font-display text-lg italic text-primary">"ਸਰਬੱਤ ਦਾ ਭਲਾ"</p>
      <p className="font-body text-xs text-muted-foreground mt-1">"May there be peace and happiness for all"</p>
    </div>
  </section>
);

export default GuestbookSection;
