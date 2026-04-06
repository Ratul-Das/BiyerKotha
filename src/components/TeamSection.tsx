import { Facebook, Instagram } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  { img: team1, name: "রাকিব হাসান", role: "প্রধান ফটোগ্রাফার" },
  { img: team2, name: "তানভীর আহমেদ", role: "সিনেম্যাটোগ্রাফার" },
  { img: team3, name: "ফারজানা আক্তার", role: "ফটো এডিটর" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500"
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
