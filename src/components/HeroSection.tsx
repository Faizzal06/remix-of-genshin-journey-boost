import { Button } from "@/components/ui/button";
import paimon from "@/assets/paimon.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background py-24 md:py-32">
    <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

    <div className="mx-auto max-w-6xl px-4 text-center">
      <img src={paimon} alt="Paimon" className="mx-auto mb-6 h-24 w-24 md:h-32 md:w-32" />
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
        Tingkatkan Akun <span className="text-primary">Genshin Impact</span> Kamu
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Jasa joki profesional untuk eksplorasi, misi harian, build karakter, dan konten endgame. Aman, cepat, dan terjangkau.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
          Lihat Layanan
        </Button>
        <Button size="lg" variant="outline" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          Hubungi Kami
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
