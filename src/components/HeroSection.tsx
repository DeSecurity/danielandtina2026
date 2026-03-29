import heroImg from "@/assets/hero-floral.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
    <div className="relative z-10 text-center px-4 py-32">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Together with their families</p>
      <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-light text-foreground leading-none mb-2">
        Daniel <span className="text-primary">&amp;</span> Tina
      </h1>
      <p className="font-body text-sm tracking-widest text-muted-foreground mt-4 mb-2">Daniel Elizondo &amp; Tina Maju</p>
      <p className="font-display text-xl text-secondary italic mb-1">ਦਾਨੀਅਲ ਅਤੇ ਟੀਨਾ</p>
      <p className="font-display text-base text-muted-foreground italic mt-4">"Two hearts, one soul, endless love"</p>
      <div className="section-divider mt-8" />
      <div className="mt-8 inline-block border border-primary/30 rounded-lg px-10 py-6 bg-background/60 backdrop-blur-sm">
        <p className="font-display text-4xl sm:text-5xl text-primary font-light">July 24, 2026</p>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Save the Date</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
