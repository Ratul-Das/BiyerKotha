import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tier = { name: string; price: string; features: string[] };

const tiers = (base: number, extra: string[]): Tier[] => [
  { name: "স্ট্যান্ডার্ড", price: `৳ ${base.toLocaleString("bn-BD")}`, features: ["১ জন ফটোগ্রাফার", "১ জন সিনেমাটোগ্রাফার", "৩০০+ এডিটেড ছবি", "৩ মিনিটের হাইলাইট ভিডিও", ...extra.slice(0, 1)] },
  { name: "লাক্সারি", price: `৳ ${(base * 1.8).toLocaleString("bn-BD")}`, features: ["২ জন ফটোগ্রাফার", "২ জন সিনেমাটোগ্রাফার", "৬০০+ এডিটেড ছবি", "৫ মিনিটের সিনেমাটিক ফিল্ম", "ড্রোন শট", ...extra.slice(0, 2)] },
  { name: "প্রিমিয়াম", price: `৳ ${(base * 2.8).toLocaleString("bn-BD")}`, features: ["৩ জন ফটোগ্রাফার", "৩ জন সিনেমাটোগ্রাফার", "১০০০+ এডিটেড ছবি", "১০ মিনিটের ফুল ফিল্ম + ট্রেলার", "ড্রোন ও গিম্বল শট", "প্রিমিয়াম অ্যালবাম", ...extra] },
];

const data = {
  muslim: {
    label: "মুসলিম বিয়ে",
    sides: {
      groom: { label: "বর পক্ষ", base: 25000, extra: ["গায়ে হলুদ কভারেজ", "নিকাহ কভারেজ", "ওয়ালিমা কভারেজ"] },
      bride: { label: "কনে পক্ষ", base: 27000, extra: ["গায়ে হলুদ কভারেজ", "আকদ কভারেজ", "ব্রাইডাল পোর্ট্রেট সেশন"] },
      both: { label: "উভয় পক্ষ", base: 45000, extra: ["উভয় পক্ষের হলুদ", "নিকাহ ও ওয়ালিমা", "প্রি-ওয়েডিং শুট ফ্রি"] },
    },
  },
  hindu: {
    label: "হিন্দু বিয়ে",
    sides: {
      groom: { label: "বর পক্ষ", base: 25000, extra: ["গায়ে হলুদ কভারেজ", "বিয়ে কভারেজ", "বৌভাত কভারেজ"] },
      bride: { label: "কনে পক্ষ", base: 27000, extra: ["গায়ে হলুদ কভারেজ", "শুভদৃষ্টি ও সিঁদুরদান", "ব্রাইডাল পোর্ট্রেট সেশন"] },
      both: { label: "উভয় পক্ষ", base: 45000, extra: ["উভয় পক্ষের হলুদ", "বিয়ে ও বৌভাত", "প্রি-ওয়েডিং শুট ফ্রি"] },
    },
  },
} as const;

const Packages = () => {
  const [type, setType] = useState<keyof typeof data>("muslim");
  const [side, setSide] = useState<"groom" | "bride" | "both">("groom");
  const cfg = data[type].sides[side];
  const list = tiers(cfg.base, [...cfg.extra]);

  return (
    <section id="packages" className="py-24 bg-card">
      <div className="container">
        <h2 className="section-title mb-4">ওয়েডিং <span className="gold-text">প্যাকেজ</span></h2>
        <p className="text-center text-muted-foreground mb-10">আপনার অনুষ্ঠান অনুযায়ী প্যাকেজ বেছে নিন</p>

        <div className="flex justify-center gap-3 mb-6">
          {(Object.keys(data) as (keyof typeof data)[]).map((k) => (
            <Button key={k} variant={type === k ? "default" : "outline"} onClick={() => setType(k)}
              className={type === k ? "bg-primary text-primary-foreground" : "gold-border text-primary"}>
              {data[k].label}
            </Button>
          ))}
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(["groom", "bride", "both"] as const).map((s) => (
            <Button key={s} size="sm" variant={side === s ? "default" : "outline"} onClick={() => setSide(s)}
              className={side === s ? "bg-primary text-primary-foreground" : "gold-border text-primary"}>
              {data[type].sides[s].label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <div key={t.name} className={`rounded-2xl p-8 bg-background gold-border ${i === 2 ? "ring-2 ring-primary" : ""}`}>
              <h3 className="text-2xl font-bold gold-text mb-2">{t.name}</h3>
              <p className="text-3xl font-bold mb-6">{t.price}</p>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
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
};

export default Packages;
