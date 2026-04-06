import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="সিনেম্যাটিক ক্যামেরা সেটআপ"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          বাংলাদেশের প্রিমিয়াম স্টুডিও
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          আপনার গল্প, <br />
          <span className="text-gradient-gold">আমাদের ফ্রেমে</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          ফটোগ্রাফি ও সিনেম্যাটোগ্রাফির মাধ্যমে আপনার বিশেষ মুহূর্তগুলোকে চিরস্মরণীয় করে রাখুন
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold"
          >
            যোগাযোগ করুন
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 border border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary/60 transition-colors"
          >
            আমাদের কাজ দেখুন
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
