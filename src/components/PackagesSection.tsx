import { useState } from "react";
import { Check } from "lucide-react";

type WeddingType = "hindu" | "muslim";
type SideType = "groom" | "bride" | "both";

interface Package {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
}

const packages: Record<WeddingType, Record<SideType, Package[]>> = {
  muslim: {
    groom: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "২৫,০০০",
        features: ["আকদ/নিকাহ কাভারেজ", "বরযাত্রী কাভারেজ", "১৫০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৪০,০০০",
        featured: true,
        features: ["আকদ/নিকাহ কাভারেজ", "বরযাত্রী কাভারেজ", "ওয়ালিমা কাভারেজ", "৩০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "অনলাইন গ্যালারি", "প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "৬০,০০০",
        features: ["সম্পূর্ণ বর পক্ষ কাভারেজ", "ওয়ালিমা কাভারেজ", "৫০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট", "LED ওয়াল ডিসপ্লে"],
      },
    ],
    bride: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "৩০,০০০",
        features: ["গায়ে হলুদ কাভারেজ", "নিকাহ কাভারেজ", "বিদায় মুহূর্ত", "১৫০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৪৫,০০০",
        featured: true,
        features: ["মেহেদী রাত কাভারেজ", "গায়ে হলুদ কাভারেজ", "নিকাহ কাভারেজ", "বিদায় মুহূর্ত", "৩০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "৭০,০০০",
        features: ["সম্পূর্ণ কনে পক্ষ কাভারেজ", "মেহেদী + হলুদ + নিকাহ", "বিদায় মুহূর্ত", "৫০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "২টি প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট"],
      },
    ],
    both: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "৫০,০০০",
        features: ["বর ও কনে পক্ষ কাভারেজ", "নিকাহ কাভারেজ", "৩০০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৭৫,০০০",
        featured: true,
        features: ["সম্পূর্ণ বিয়ে কাভারেজ", "মেহেদী + হলুদ + নিকাহ + ওয়ালিমা", "বরযাত্রী ও বিদায়", "৫০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "ড্রোন শুট", "২টি প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "১,২০,০০০",
        features: ["সম্পূর্ণ বিয়ে কাভারেজ (সব ইভেন্ট)", "মেহেদী + হলুদ + নিকাহ + ওয়ালিমা", "বরযাত্রী ও বিদায়", "৮০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "৩টি প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট", "LED ওয়াল ডিসপ্লে"],
      },
    ],
  },
  hindu: {
    groom: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "২৫,০০০",
        features: ["বিয়ের দিন ফটোগ্রাফি", "বরযাত্রী কাভারেজ", "১৫০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৪৫,০০০",
        featured: true,
        features: ["গায়ে হলুদ কাভারেজ", "বিয়ের দিন ফটোগ্রাফি", "বরযাত্রী কাভারেজ", "৩০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "অনলাইন গ্যালারি", "প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "৬৫,০০০",
        features: ["সম্পূর্ণ বর পক্ষ কাভারেজ", "হলুদ + বিয়ে + রিসেপশন", "৫০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট", "LED ওয়াল ডিসপ্লে"],
      },
    ],
    bride: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "৩০,০০০",
        features: ["গায়ে হলুদ কাভারেজ", "বিয়ের দিন ফটোগ্রাফি", "বিদায় মুহূর্ত", "১৫০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৫০,০০০",
        featured: true,
        features: ["মেহেদী রাত কাভারেজ", "গায়ে হলুদ কাভারেজ", "বিয়ের দিন ফটোগ্রাফি", "বিদায় মুহূর্ত", "৩০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "৭৫,০০০",
        features: ["সম্পূর্ণ কনে পক্ষ কাভারেজ", "মেহেদী + হলুদ + বিয়ে", "বিদায় মুহূর্ত", "৫০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "২টি প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট"],
      },
    ],
    both: [
      {
        name: "স্ট্যান্ডার্ড",
        price: "৫৫,০০০",
        features: ["বর ও কনে পক্ষ কাভারেজ", "বিয়ের দিন সম্পূর্ণ", "৩০০+ এডিটেড ফটো", "হাইলাইট ভিডিও", "অনলাইন গ্যালারি"],
      },
      {
        name: "লাক্সারি",
        price: "৮৫,০০০",
        featured: true,
        features: ["সম্পূর্ণ বিয়ে কাভারেজ", "মেহেদী + হলুদ + বিয়ে + রিসেপশন", "বরযাত্রী ও বিদায়", "৫০০+ এডিটেড ফটো", "সিনেম্যাটিক হাইলাইট ভিডিও", "ড্রোন শুট", "২টি প্রিন্টেড অ্যালবাম"],
      },
      {
        name: "প্রিমিয়াম",
        price: "১,৩০,০০০",
        features: ["সম্পূর্ণ বিয়ে কাভারেজ (সব ইভেন্ট)", "মেহেদী + হলুদ + বিয়ে + রিসেপশন", "বরযাত্রী ও বিদায়", "৮০০+ এডিটেড ফটো", "ফুল সিনেম্যাটিক ফিল্ম", "ড্রোন শুট", "৩টি প্রিন্টেড অ্যালবাম", "ফ্রেমড পোর্ট্রেট", "LED ওয়াল ডিসপ্লে"],
      },
    ],
  },
};

const sideLabels: Record<SideType, string> = {
  groom: "বর পক্ষ",
  bride: "কনে পক্ষ",
  both: "উভয় পক্ষ",
};

const PackagesSection = () => {
  const [activeType, setActiveType] = useState<WeddingType>("muslim");
  const [activeSide, setActiveSide] = useState<SideType>("both");

  return (
    <section id="packages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">প্যাকেজ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            বিবাহ <span className="text-gradient-gold">প্যাকেজসমূহ</span>
          </h2>
        </div>

        {/* Wedding Type Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-card border border-border rounded-xl p-1.5">
            <button
              onClick={() => setActiveType("muslim")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeType === "muslim"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              মুসলিম বিবাহ
            </button>
            <button
              onClick={() => setActiveType("hindu")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeType === "hindu"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              হিন্দু বিবাহ
            </button>
          </div>
        </div>

        {/* Side Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card border border-border rounded-xl p-1.5">
            {(Object.keys(sideLabels) as SideType[]).map((side) => (
              <button
                key={side}
                onClick={() => setActiveSide(side)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSide === side
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {sideLabels[side]}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages[activeType][activeSide].map((pkg, index) => (
            <div
              key={`${activeType}-${activeSide}-${index}`}
              className={`relative bg-card border rounded-xl p-8 flex flex-col transition-all duration-500 ${
                pkg.featured
                  ? "border-primary/50 glow-gold scale-[1.02]"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  জনপ্রিয়
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground text-center">{pkg.name}</h3>
              <div className="text-center my-6">
                <span className="text-3xl font-bold text-gradient-gold">৳{pkg.price}</span>
                <p className="text-muted-foreground text-xs mt-1">থেকে শুরু</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  pkg.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary/30 text-foreground hover:border-primary/60"
                }`}
              >
                বুক করুন
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
