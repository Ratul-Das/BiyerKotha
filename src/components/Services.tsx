import { Camera, Clapperboard, Heart, Building2, Baby, Sparkles } from "lucide-react";

const services = [
  { icon: Heart, title: "ওয়েডিং ফটোগ্রাফি", desc: "বিয়ের প্রতিটি মুহূর্ত — হলুদ, মেহেন্দি, নিকাহ ও রিসেপশনের অসাধারণ সব ছবি।" },
  { icon: Clapperboard, title: "সিনেমাটোগ্রাফি", desc: "সিনেমার মতো মানের ওয়েডিং ফিল্ম, ট্রেলার ও হাইলাইট ভিডিও।" },
  { icon: Camera, title: "প্রি-ওয়েডিং শুট", desc: "রোমান্টিক প্রি-ওয়েডিং ফটোশুট দেশের সেরা লোকেশনগুলোতে।" },
  { icon: Building2, title: "কর্পোরেট ইভেন্ট", desc: "কনফারেন্স, সেমিনার ও কর্পোরেট অনুষ্ঠানের প্রফেশনাল কভারেজ।" },
  { icon: Baby, title: "বেবি ও ফ্যামিলি শুট", desc: "জন্মদিন, বেবি শাওয়ার ও ফ্যামিলি মুহূর্তের মিষ্টি ফ্রেম।" },
  { icon: Sparkles, title: "অন্যান্য অনুষ্ঠান", desc: "ঈদ, বার্ষিকী, সংবর্ধনা — যেকোনো উদযাপনের পূর্ণাঙ্গ কভারেজ।" },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container">
      <h2 className="section-title mb-4">আমাদের <span className="gold-text">সেবাসমূহ</span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">ছোট থেকে বড় — প্রতিটি অনুষ্ঠানে আমরা দিই প্রিমিয়াম মানের ফটোগ্রাফি ও সিনেমাটোগ্রাফি সেবা।</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card gold-border rounded-2xl p-8 hover:bg-secondary transition-colors">
            <s.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
