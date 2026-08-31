import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  { name: "স্ট্যান্ডার্ড", price: "৳ ১৫,০০০", features: ["৪ ঘণ্টা কভারেজ", "১ জন ফটোগ্রাফার", "২০০+ এডিটেড ছবি", "২ মিনিটের হাইলাইট ভিডিও"] },
  { name: "লাক্সারি", price: "৳ ২৮,০০০", features: ["৮ ঘণ্টা কভারেজ", "২ জন ফটোগ্রাফার + ১ ভিডিওগ্রাফার", "৫০০+ এডিটেড ছবি", "৫ মিনিটের ইভেন্ট ফিল্ম", "লাইভ স্ট্রিমিং সাপোর্ট"] },
  { name: "প্রিমিয়াম", price: "৳ ৪৫,০০০", features: ["ফুল ডে কভারেজ", "৩ জন ফটোগ্রাফার + ২ ভিডিওগ্রাফার", "১০০০+ এডিটেড ছবি", "১০ মিনিটের ফুল ফিল্ম", "ড্রোন কভারেজ", "সেম-ডে এডিট ডেলিভারি"] },
];

const CorporatePackages = () => (
  <section className="py-24">
    <div className="container">
      <h2 className="section-title mb-4">কর্পোরেট <span className="gold-text">প্যাকেজ</span></h2>
      <p className="text-center text-muted-foreground mb-12">কনফারেন্স, সেমিনার ও কর্পোরেট ইভেন্টের জন্য</p>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((p, i) => (
          <div key={p.name} className={`rounded-2xl p-8 bg-card gold-border ${i === 2 ? "ring-2 ring-primary" : ""}`}>
            <h3 className="text-2xl font-bold gold-text mb-2">{p.name}</h3>
            <p className="text-3xl font-bold mb-6">{p.price}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-muted-foreground"><Check className="w-5 h-5 text-primary shrink-0" />{f}</li>
              ))}
            </ul>
            <a href="#contact"><Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">বুক করুন</Button></a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CorporatePackages;
