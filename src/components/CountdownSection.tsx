import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-07-24T09:00:00-07:00").getTime();

const CountdownSection = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, WEDDING_DATE - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const units = [
    { val: days, en: "Days", pa: "ਦਿਨ" },
    { val: hours, en: "Hours", pa: "ਘੰਟੇ" },
    { val: minutes, en: "Minutes", pa: "ਮਿੰਟ" },
    { val: seconds, en: "Seconds", pa: "ਸਕਿੰਟ" },
  ];

  return (
    <section className="py-20 bg-accent/40">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h3 className="font-display text-2xl text-foreground mb-8">Countdown to Our Big Day</h3>
        <div className="flex justify-center gap-4 sm:gap-8">
          {units.map((u) => (
            <div key={u.en} className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-display text-3xl sm:text-4xl text-primary-foreground">{u.val}</span>
              </div>
              <span className="text-xs font-body uppercase tracking-wider text-muted-foreground mt-2">{u.en}</span>
              <span className="text-xs font-display text-secondary">{u.pa}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
