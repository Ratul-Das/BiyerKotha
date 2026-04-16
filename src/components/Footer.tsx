import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <img src={logo} alt="বিয়ের কথা" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-gradient-gold">বিয়ের কথা</span>
            </a>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              বাংলাদেশের প্রিমিয়াম ফটোগ্রাফি ও সিনেম্যাটোগ্রাফি স্টুডিও। আপনার বিশেষ মুহূর্তগুলো চিরস্মরণীয় করে রাখুন।
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/BiyerKothaa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCdGATE1SvSqAXG2qOXRaMFg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2.5">
              {[
                { label: "হোম", href: "#home" },
                { label: "সেবাসমূহ", href: "#services" },
                { label: "পোর্টফোলিও", href: "#portfolio" },
                { label: "প্যাকেজ", href: "#packages" },
                { label: "যোগাযোগ", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold mb-4">আমাদের সেবা</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>বিবাহ ফটোগ্রাফি</li>
              <li>সিনেম্যাটিক ভিডিও</li>
              <li>ইভেন্ট কাভারেজ</li>
              <li>পোর্ট্রেট শুট</li>
              <li>ড্রোন ভিডিওগ্রাফি</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>মিরের বাজার, পূবাইল, গাজীপুর</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary shrink-0" />
                <span>01890-189901</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                <span>biyerkotha444@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © ২০২৬ বিয়ের কথা। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
