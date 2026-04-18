import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import paimon from "@/assets/paimon.png";

const navLinks = [
  { label: "Layanan", href: "#services" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={paimon} alt="Paimon" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">GenshinJoki</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
          <Button size="sm" onClick={() => scrollTo("#contact")}>Mulai Sekarang</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </button>
          ))}
          <Button size="sm" className="mt-2 w-full" onClick={() => scrollTo("#contact")}>Mulai Sekarang</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
