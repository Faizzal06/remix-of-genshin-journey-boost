import { Compass, CalendarCheck, Swords, Trophy } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Compass,
    title: "Eksplorasi",
    description: "Eksplorasi peta lengkap termasuk semua chest, waypoint, oculi, dan pencapaian tersembunyi di setiap region.",
    price: "Mulai Rp50rb",
  },
  {
    icon: CalendarCheck,
    title: "Misi Harian",
    description: "Komisi harian, penggunaan resin, dan penyelesaian event agar kamu tidak ketinggalan reward.",
    price: "Mulai Rp25rb/hari",
  },
  {
    icon: Swords,
    title: "Build Karakter",
    description: "Farming artefak, leveling talent, dan ascension senjata untuk memaksimalkan karakter favoritmu.",
    price: "Mulai Rp75rb",
  },
  {
    icon: Trophy,
    title: "Konten Endgame",
    description: "Full clear Spiral Abyss, Imaginarium Theater, dan tantangan endgame lainnya diselesaikan untukmu.",
    price: "Mulai Rp100rb",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-secondary/50 py-20">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-3xl font-bold text-foreground">Layanan Kami</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Pilih dari berbagai layanan joki Genshin Impact profesional kami.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
