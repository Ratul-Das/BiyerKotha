import { Check } from "lucide-react";

interface Package {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
}

const corporatePackages: Package[] = [
  {
    name: "স্ট্যান্ডার্ড",
    price: "২০,০০০",
    features: [
      "ইভেন্ট ফটোগ্রাফি",
      "১০০+ এডিটেড ফটো",
      "হাইলাইট ভিডিও",
      "অনলাইন গ্যালারি",
      "১ জন ফটোগ্রাফার",
    ],
  },
  {
    name: "লাক্সারি",
    price: "৪৫,০০০",
    featured: true,
    features: [
      "সম্পূর্ণ ইভেন্ট কাভারেজ",
      "৩০০+ এডিটেড ফটো",
      "সিনেম্যাটিক হাইলাইট ভিডিও",
      "ড্রোন শুট",
      "অনলাইন গ্যালারি",
      "২ জন ফটোগ্রাফার",
      "লাইভ স্ট্রিমিং সাপোর্ট",
    ],
  },
  {
    name: "প্রিমিয়াম",
    price: "৮০,০০০",
    features: [
      "মাল্টি-ডে ইভেন্ট কাভারেজ",
      "৫০০+ এডিটেড ফটো",
      "ফুল সিনেম্যাটিক ফিল্ম",
      "ড্রোন শুট",
      "লাইভ স্ট্রিমিং",
      "৩ জন ফটোগ্রাফার ও ভিডিওগ্রাফার",
      "প্রিন্টেড অ্যালবাম",
      "LED ওয়াল ডিসপ্লে",
      "সোশ্যাল মিডিয়া কন্টেন্ট",
    ],
  },
];

const CorporatePackagesSection = () => {
  return (
    <section id="corporate-packages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">কর্পোরেট</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            কর্পোরেট <span className="text-gradient-gold">প্যাকেজসমূহ</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            কনফারেন্স, সেমিনার, প্রোডাক্ট লঞ্চ, গালা ডিনার ও যেকোনো কর্পোরেট ইভেন্টের জন্য
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {corporatePackages.map((pkg, index) => (
            <div
              key={index}
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

export default CorporatePackagesSection;
