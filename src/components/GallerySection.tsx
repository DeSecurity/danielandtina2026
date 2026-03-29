const GallerySection = () => (
  <section id="gallery" className="py-24 bg-sage-light/30 px-4">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">Our Gallery</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਸਾਡੀ ਗੈਲਰੀ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">Capturing moments of love, laughter, and joy</p>
    </div>
    <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-square rounded-xl bg-muted flex items-center justify-center text-muted-foreground font-body text-xs">
          Photo {i + 1}
        </div>
      ))}
    </div>
    <div className="max-w-md mx-auto text-center mt-10">
      <p className="font-body text-sm text-foreground font-medium">#DanielAndTina2026</p>
      <p className="font-body text-xs text-muted-foreground mt-2">Professional wedding photos will be added after our special day</p>
    </div>
  </section>
);

export default GallerySection;
