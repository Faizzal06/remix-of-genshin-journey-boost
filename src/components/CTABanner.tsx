import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="bg-primary py-16">
    <div className="mx-auto max-w-6xl px-4 text-center">
      <h2 className="text-3xl font-bold text-primary-foreground">Siap Tingkatkan Akunmu?</h2>
      <p className="mt-3 text-primary-foreground/80">Mulai sekarang dan biarkan profesional kami yang menangani grind untukmu.</p>
      <Button size="lg" variant="secondary" className="mt-6" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
        Mulai Sekarang
      </Button>
    </div>
  </section>
);

export default CTABanner;
