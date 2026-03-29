import { Music, Play } from "lucide-react";

const songs = [
  { title: "Laung Laachi", artist: "Mannat Noor", tag: "Traditional" },
  { title: "Nachdi Phira", artist: "Secret Superstar", tag: "Modern Punjabi" },
  { title: "Mundian To Bach Ke", artist: "Punjabi MC", tag: "Fusion" },
  { title: "All of Me", artist: "John Legend", tag: "Romantic" },
];

const MusicSection = () => (
  <section id="music" className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="font-display text-4xl text-foreground">Music &amp; Vibes</h2>
      <p className="font-display text-lg text-secondary italic mt-1">ਸੰਗੀਤ ਅਤੇ ਮਾਹੌਲ</p>
      <div className="section-divider" />
      <p className="text-muted-foreground font-body text-sm">From traditional Punjabi beats to romantic melodies</p>
    </div>
    <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
      {songs.map((s) => (
        <div key={s.title} className="flex items-center gap-4 bg-accent/40 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Play className="text-primary" size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-base text-foreground truncate">{s.title}</p>
            <p className="font-body text-xs text-muted-foreground">{s.artist}</p>
          </div>
          <span className="font-body text-[10px] uppercase tracking-wider text-primary border border-primary/30 rounded-full px-3 py-1 shrink-0">{s.tag}</span>
        </div>
      ))}
    </div>
    <div className="max-w-md mx-auto text-center mt-8">
      <Music className="mx-auto text-primary mb-3" size={20} />
      <p className="font-body text-xs text-muted-foreground">Live DJ and traditional dhol players will keep the energy high!</p>
    </div>
  </section>
);

export default MusicSection;
