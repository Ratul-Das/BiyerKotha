import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const members = [
  { img: t1, name: "রাতুল দাস", role: "চিফ সিনেমাটোগ্রাফার, সহ-প্রতিষ্ঠাতা ও জেনারেল ম্যানেজার (জি. এম)" },
  { img: t2, name: "মোঃ ওসমান খান", role: "চিফ ফটোগ্রাফার, সহ-প্রতিষ্ঠাতা ও ম্যানেজিং ডিরেক্টর (এম. ডি)" },
  { img: t3, name: "খোরশেদ আলম রনি", role: "সহ-প্রতিষ্ঠাতা ও চিফ এক্সিকিউটিং অফিসার (সি. ই. ও)" },
];

const Team = () => (
  <section id="team" className="py-24">
    <div className="container">
      <h2 className="section-title mb-4">আমাদের <span className="gold-text">টিম</span></h2>
      <p className="text-center text-muted-foreground mb-12">যাঁরা আপনার স্মৃতিকে করেন চিরস্থায়ী</p>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((m) => (
          <div key={m.name} className="bg-card gold-border rounded-2xl p-6 w-72 text-center">
            <img src={m.img} alt={m.name} loading="lazy" width={700} height={700} className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-2 border-primary" />
            <h3 className="text-xl font-bold gold-text">{m.name}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
