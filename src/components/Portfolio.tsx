import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

const items = [
  { img: p1, title: "ব্রাইডাল পোর্ট্রেট" },
  { img: p2, title: "গ্রুম পোর্ট্রেট" },
  { img: p3, title: "রিসেপশন মুহূর্ত" },
  { img: p4, title: "বিয়ের বিস্তারিত" },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-card">
    <div className="container">
      <h2 className="section-title mb-4">আমাদের <span className="gold-text">পোর্টফোলিও</span></h2>
      <p className="text-center text-muted-foreground mb-12">সেরা কিছু কাজের ঝলক</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <figure key={it.title} className="group relative overflow-hidden rounded-2xl gold-border">
            <img src={it.img} alt={it.title} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-center font-semibold">{it.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
