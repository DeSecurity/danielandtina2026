import { MapPin, Plane, Car, Hotel } from "lucide-react";

const DetailsSection = () => (
  <section id="details" className="py-24 px-4">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="font-display text-4xl text-foreground">Wedding Details</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਵਿਆਹ ਦੇ ਵੇਰਵੇ</p>
      <div className="section-divider" />
    </div>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Venue */}
      <div className="bg-accent/40 rounded-xl p-8 text-center">
        <MapPin className="mx-auto text-primary mb-3" size={28} />
        <h3 className="font-display text-xl text-foreground mb-2">Venue &amp; Directions</h3>
        <p className="font-body text-sm text-muted-foreground">Gurudwara Sacha Marg Sahib</p>
        <p className="font-body text-xs text-muted-foreground">12431 SE 286th Pl, Auburn, WA 98092</p>
      </div>

      {/* Travel */}
      <div className="bg-accent/40 rounded-xl p-8 text-center">
        <Plane className="mx-auto text-primary mb-3" size={28} />
        <h3 className="font-display text-xl text-foreground mb-2">Travel Information</h3>
        <p className="font-body text-sm text-muted-foreground">Seattle-Tacoma International Airport (SEA)</p>
        <p className="font-body text-xs text-muted-foreground">~30 minutes away • Uber/Lyft available</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Car className="text-secondary" size={14} />
          <span className="font-body text-xs text-muted-foreground">Free valet parking at venue</span>
        </div>
      </div>

      {/* Accommodations */}
      <div className="bg-accent/40 rounded-xl p-8 text-center">
        <Hotel className="mx-auto text-primary mb-3" size={28} />
        <h3 className="font-display text-xl text-foreground mb-2">Accommodations</h3>
        <div className="space-y-3 mt-4">
          <div>
            <p className="font-body text-sm font-medium text-foreground">Hotel Grandeur</p>
            <p className="font-body text-xs text-muted-foreground">5-star luxury • $199/night</p>
          </div>
          <div>
            <p className="font-body text-sm font-medium text-foreground">Comfort Inn &amp; Suites</p>
            <p className="font-body text-xs text-muted-foreground">Family-friendly • $129/night</p>
          </div>
        </div>
        <p className="font-body text-xs text-muted-foreground mt-3 italic">Mention "Elizondo-Maju Wedding" • Book by June 1, 2026</p>
      </div>

      {/* Dress Code */}
      <div className="bg-accent/40 rounded-xl p-8 text-center">
        <span className="text-3xl block mb-2">👗</span>
        <h3 className="font-display text-xl text-foreground mb-2">Dress Code</h3>
        <p className="font-body text-sm text-foreground font-medium">Traditional Attire Encouraged</p>
        <p className="font-body text-xs text-muted-foreground mt-2">Women: Lehenga, Salwar Kameez, Saree, or elegant formal</p>
        <p className="font-body text-xs text-muted-foreground">Men: Sherwani, Kurta Pajama, or formal suit</p>
        <p className="font-body text-xs text-primary mt-3 font-medium">Avoid: white, cream, or red</p>
      </div>
    </div>
  </section>
);

export default DetailsSection;
