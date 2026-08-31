import about from "@/assets/about.jpg";

const About = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <img src={about} alt="Dream Of Memories টিম কাজ করছে" loading="lazy" width={1200} height={800} className="rounded-2xl gold-border object-cover w-full" />
      <div>
        <h2 className="section-title text-left mb-6">আমাদের <span className="gold-text">সম্পর্কে</span></h2>
        <p className="text-muted-foreground text-lg mb-4">
          Dream Of Memories বাংলাদেশের একটি অন্যতম প্রিমিয়ার ফটোগ্রাফি ও সিনেমাটোগ্রাফি কোম্পানি। বিয়ে, হলুদ, নিকাহ, কর্পোরেট ইভেন্ট — প্রতিটি মুহূর্তকে আমরা ফুটিয়ে তুলি সিনেমাটিক ভাষায়।
        </p>
        <p className="text-muted-foreground text-lg mb-6">
          অভিজ্ঞ ফটোগ্রাফার ও সিনেমাটোগ্রাফারদের নিয়ে গঠিত আমাদের টিম প্রতিটি প্রজেক্টে দেয় সেরা প্রতিশ্রুতি — আপনার স্মৃতি হবে চিরস্থায়ী।
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="gold-border rounded-xl p-4"><p className="text-3xl font-bold gold-text">৫০০+</p><p className="text-muted-foreground text-sm">সফল ইভেন্ট</p></div>
          <div className="gold-border rounded-xl p-4"><p className="text-3xl font-bold gold-text">৫+</p><p className="text-muted-foreground text-sm">বছরের অভিজ্ঞতা</p></div>
          <div className="gold-border rounded-xl p-4"><p className="text-3xl font-bold gold-text">১০০%</p><p className="text-muted-foreground text-sm">সন্তুষ্ট ক্লায়েন্ট</p></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
