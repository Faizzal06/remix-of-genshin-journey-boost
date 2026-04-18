import { MessageCircle, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t bg-background py-12">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <span className="text-lg font-bold text-primary">GenshinJoki</span>
          <p className="mt-2 text-sm text-muted-foreground">Jasa joki Genshin Impact profesional. Aman, cepat, dan terpercaya.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Tautan Cepat</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Layanan</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimoni</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> Discord: GenshinJoki#1234</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp: +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> support@genshinjoki.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GenshinJoki. Hak cipta dilindungi. Tidak berafiliasi dengan HoYoverse.
      </div>
    </div>
  </footer>
);

export default Footer;
