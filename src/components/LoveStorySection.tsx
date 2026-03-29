const events = [
  { emoji: "👫", title: "How We Met", date: "2024", text: "We first met at work, long before either of us realized what we would eventually mean to each other. One day she accidentally deleted a file, and I helped recover it. A small moment, but it became the first spark." },
  { emoji: "🌹", title: "First Time Hanging Out", date: "August 2024", text: "She invited me to the renaissance fair, half convinced I didn't have any friends. What started as a simple outing quickly felt natural, easy, and undeniably fun." },
  { emoji: "🏋️", title: "Growing Closer", date: "2024", text: "We spent time with each other almost every day. In the gym, she jokingly appointed herself my personal trainer. Those workouts became one of the many places where our connection deepened." },
  { emoji: "❤️", title: "Becoming Official", date: "January 24, 2025", text: "On January 24th, we made official what had already become real for both of us." },
  { emoji: "🖋️", title: "Our First Tattoo", date: "February 2025", text: "Less than a month later, we got matching tattoos. Some decisions feel effortless when your heart is already certain." },
  { emoji: "💍", title: "The Proposal", date: "September 2025", text: "When you know, you know. By September, I was ready to take the next step. She never saw it coming, which made the moment even more perfect." },
  { emoji: "📋", title: "Wedding Planning", date: "2025-2026", text: "Now we're planning the celebration that will bring our families and friends together to witness the start of our next chapter." },
];

const LoveStorySection = () => (
  <section id="story" className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="font-display text-4xl text-foreground">Our Love Story</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਸਾਡੀ ਪ੍ਰੇਮ ਕਹਾਣੀ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">Every love story is beautiful, but ours is our favorite.</p>
    </div>
    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block" />
      {events.map((e, i) => (
        <div key={i} className={`relative flex flex-col sm:flex-row items-center gap-4 mb-12 ${i % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : "sm:text-left"}`}>
          <div className="flex-1">
            <span className="text-3xl">{e.emoji}</span>
            <h3 className="font-display text-xl text-foreground mt-2">{e.title}</h3>
            <span className="font-body text-xs uppercase tracking-wider text-primary">{e.date}</span>
            <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{e.text}</p>
          </div>
          <div className="hidden sm:flex w-3 h-3 rounded-full bg-primary shrink-0 relative z-10" />
          <div className="flex-1 hidden sm:block" />
        </div>
      ))}
    </div>
    <div className="max-w-xl mx-auto text-center mt-12 border-t border-border pt-8">
      <p className="font-display text-lg italic text-muted-foreground">"Love is not about how many days you've been together. Love is about how much you love each other every day."</p>
      <p className="font-body text-xs uppercase tracking-wider text-primary mt-3">— Daniel &amp; Tina</p>
    </div>
  </section>
);

export default LoveStorySection;
