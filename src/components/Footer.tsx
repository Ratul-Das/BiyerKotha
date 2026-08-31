import { Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const LOGO = "/__l5e/assets-v1/e2f955b5-481a-4942-bf12-35c65f5b1a48/logo.png";

const Footer = () => (
  <footer className="bg-background border-t border-border pt-16 pb-8">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={LOGO} alt="Dream Of Memories লোগো" loading="lazy" className="h-12 w-auto" />
          <span className="text-xl font-bold gold-text">Dream Of Memories</span>
        </div>
        <p className="text-muted-foreground">আপনার জীবনের সেরা মুহূর্তগুলো ধরে রাখি সিনেমাটিক ফ্রেমে।</p>
        <div className="flex gap-4 mt-5">
          <a href="https://www.facebook.com/BiyerKothaa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full gold-border text-primary hover:bg-primary/10"><Facebook className="w-5 h-5" /></a>
          <a href="https://www.youtube.com/channel/UCdGATE1SvSqAXG2qOXRaMFg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-full gold-border text-primary hover:bg-primary/10"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 gold-text">দ্রুত লিংক</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#about" className="hover:text-primary">আমাদের সম্পর্কে</a></li>
          <li><a href="#services" className="hover:text-primary">সেবা</a></li>
          <li><a href="#gallery" className="hover:text-primary">ফটো গ্যালারি</a></li>
          <li><a href="#packages" className="hover:text-primary">প্যাকেজ</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4 gold-text">যোগাযোগ</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3 items-center"><Phone className="w-4 h-4 text-primary" />01890-189901</li>
          <li className="flex gap-3 items-center"><Mail className="w-4 h-4 text-primary" />biyerkotha444@gmail.com</li>
          <li className="flex gap-3 items-center"><MapPin className="w-4 h-4 text-primary" />Mirer Bazar, Pubail, Gazipur</li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
      © {new Date().getFullYear()} Dream Of Memories. সর্বস্বত্ব সংরক্ষিত।
    </div>
  </footer>
);

export default Footer;
