import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { number: "৫০০+", label: "সম্পন্ন প্রজেক্ট" },
  { number: "১০+", label: "বছরের অভিজ্ঞতা" },
  { number: "৩০০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { number: "১৫+", label: "দক্ষ সদস্য" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden glow-gold">
            <img
              src={aboutTeam}
              alt="আমাদের টিম"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">আমাদের সম্পর্কে</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              আবেগকে <span className="text-gradient-gold">শিল্পে</span> রূপ দিই
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ফ্রেমক্রাফট বাংলাদেশের একটি প্রিমিয়াম ফটোগ্রাফি ও সিনেম্যাটোগ্রাফি কোম্পানি। আমরা বিশ্বাস করি প্রতিটি মুহূর্তের নিজস্ব একটি গল্প আছে — আমাদের কাজ হলো সেই গল্পকে সবচেয়ে সুন্দরভাবে তুলে ধরা।
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              আধুনিক প্রযুক্তি ও সৃজনশীল দৃষ্টিভঙ্গির মিশ্রণে আমরা তৈরি করি এমন কন্টেন্ট যা হৃদয় ছুঁয়ে যায়।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
