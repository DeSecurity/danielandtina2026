import { ShoppingCart, Plane } from "lucide-react";

const RegistrySection = () => (
  <section id="registry" className="py-24 bg-rose-light/30 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">Gift Registry</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਤੋਹਫ਼ੇ ਦੀ ਸੂਚੀ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">Your presence is the only present we need, but if you'd like to celebrate with a gift, we've curated a selection of items to help us build our home together.</p>
    </div>
    <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
      <div className="bg-background rounded-xl p-8 text-center border border-border hover:shadow-md transition-shadow">
        <ShoppingCart className="mx-auto text-primary mb-3" size={32} />
        <h3 className="font-display text-xl text-foreground">Amazon</h3>
        <p className="font-body text-xs text-muted-foreground mt-2">Home essentials, electronics, and everyday items</p>
        <button className="mt-4 font-body text-xs uppercase tracking-wider text-primary border border-primary rounded-full px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">View Registry</button>
      </div>
      <div className="bg-background rounded-xl p-8 text-center border border-border hover:shadow-md transition-shadow">
        <Plane className="mx-auto text-primary mb-3" size={32} />
        <h3 className="font-display text-xl text-foreground">Honeymoon Fund</h3>
        <p className="font-body text-xs text-muted-foreground mt-2">Help us create memories on our dream honeymoon</p>
        <button className="mt-4 font-body text-xs uppercase tracking-wider text-primary border border-primary rounded-full px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">View Registry</button>
      </div>
    </div>
    <p className="text-center font-display text-sm italic text-muted-foreground mt-10">"ਧੰਨਵਾਦ" — Thank you</p>
  </section>
);

export default RegistrySection;
