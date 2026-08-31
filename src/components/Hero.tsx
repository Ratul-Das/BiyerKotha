import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={hero} alt="সিনেমাটিক ওয়েডিং মুহূর্ত" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
    <div className="relative z-10 text-center px-4">
      <p className="text-primary tracking-[0.3em] uppercase mb-4">ফটোগ্রাফি ও সিনেমাটোগ্রাফি</p>
      <h1 className="text-4xl md:text-7xl font-bold mb-6">
        আপনার স্মৃতি, <span className="gold-text">আমাদের ফ্রেমে</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Dream Of Memories — আপনার জীবনের সবচেয়ে সুন্দর মুহূর্তগুলো ধরে রাখি সিনেমাটিক ক্যামেরায়, চিরকালের জন্য।
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="#packages"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">প্যাকেজ দেখুন</Button></a>
        <a href="#contact"><Button size="lg" variant="outline" className="gold-border text-primary hover:bg-primary/10">যোগাযোগ করুন</Button></a>
      </div>
    </div>
  </section>
);

export default Hero;
