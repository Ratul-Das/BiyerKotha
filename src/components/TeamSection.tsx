import { Facebook, Instagram } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  { img: team1, name: "রাতুল দাস", role: "চিফ সিনেমাটোগ্রাফার, সহ-প্রতিষ্ঠাতা ও জেনারেল ম্যানেজার (জি. এম)" },
  { img: team2, name: "মোঃ ওসমান খান", role: "চিফ ফটোগ্রাফার, সহ-প্রতিষ্ঠাতা ও ম্যানেজিং ডিরেক্টর (এম. ডি)" },
  { img: team3, name: "খোরশেদ আলম রনি", role: "সহ-প্রতিষ্ঠাতা ও চিফ এক্সিকিউটিং অফিসার (সি. ই. ও)" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">আমাদের টিম</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            দক্ষ <span className="text-gradient-gold">পেশাদারগণ</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mt-1">{member.role}</p>
                <div className="flex justify-center gap-3 mt-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
