import { Camera, Film, Sparkles, Image } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "ফটোগ্রাফি",
    description: "বিয়ে, ইভেন্ট, পোর্ট্রেট — প্রতিটি মুহূর্তকে শৈল্পিকভাবে ধরে রাখি।",
  },
  {
    icon: Film,
    title: "সিনেম্যাটোগ্রাফি",
    description: "সিনেমাটিক ভিডিও প্রোডাকশন যা আপনার গল্পকে জীবন্ত করে তোলে।",
  },
  {
    icon: Image,
    title: "ফটো এডিটিং",
    description: "পেশাদার রিটাচিং ও কালার গ্রেডিং-এর মাধ্যমে পরিপূর্ণ ছবি।",
  },
  {
    icon: Sparkles,
    title: "ইভেন্ট কাভারেজ",
    description: "কর্পোরেট ইভেন্ট থেকে পারিবারিক অনুষ্ঠান — সম্পূর্ণ কাভারেজ।",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">আমাদের সেবা</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            আমরা যা <span className="text-gradient-gold">অফার করি</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 text-center hover:border-primary/40 hover:glow-gold transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
