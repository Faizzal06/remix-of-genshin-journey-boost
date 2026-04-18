import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Aether_Main", initials: "AM", rating: 5, text: "Spiral Abyss saya berhasil 36 bintang dalam beberapa jam. Super profesional dan ramah!" },
  { name: "LumineFan99", initials: "LF", rating: 5, text: "Komisi harian ditangani dengan sempurna selama dua minggu saat saya liburan. Sangat direkomendasikan!" },
  { name: "Zhongli_Simp", initials: "ZS", rating: 5, text: "Mereka farming set artefak sempurna untuk Hu Tao saya. Substat-nya luar biasa!" },
  { name: "AdventureRank58", initials: "AR", rating: 4, text: "Layanan eksplorasi sangat teliti — menemukan chest yang bahkan saya tidak tahu ada. Harga terjangkau." },
];

const TestimonialCarousel = () => {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">Apa Kata Pelanggan Kami</h2>
        <p className="mt-3 text-muted-foreground">Dipercaya oleh para traveler di seluruh Teyvat.</p>

        <div className="relative mx-auto mt-12 max-w-lg">
          <Card className="min-h-[200px]">
            <CardContent className="flex flex-col items-center gap-4 p-8">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">{t.initials}</AvatarFallback>
              </Avatar>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
              <span className="text-sm font-medium text-foreground">{t.name}</span>
            </CardContent>
          </Card>

          <Button variant="ghost" size="icon" className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2" onClick={prev}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2" onClick={next}>
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`h-2 w-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-muted-foreground/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
