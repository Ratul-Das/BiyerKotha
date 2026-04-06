import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  { img: portfolio1, title: "বিবাহ ফটোগ্রাফি", category: "ফটোগ্রাফি" },
  { img: portfolio2, title: "ইভেন্ট কাভারেজ", category: "ভিডিও" },
  { img: portfolio3, title: "সিনেম্যাটিক শুট", category: "সিনেম্যাটোগ্রাফি" },
  { img: portfolio4, title: "আউটডোর পোর্ট্রেট", category: "ফটোগ্রাফি" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">পোর্টফোলিও</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            আমাদের <span className="text-gradient-gold">সেরা কাজ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-primary text-xs tracking-wider uppercase">{item.category}</span>
                <h3 className="text-foreground font-bold text-lg mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
