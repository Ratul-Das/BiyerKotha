import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { img: g1, title: "হলুদ সন্ধ্যা" },
  { img: g2, title: "নিকাহ সেরেমনি" },
  { img: g3, title: "বার্থডে ফটোশুট" },
  { img: g4, title: "কর্পোরেট ইভেন্ট" },
  { img: g5, title: "প্রি-ওয়েডিং শুট" },
  { img: g6, title: "রিসেপশন ডেকোর" },
];

const PhotoGallery = () => (
  <section id="gallery" className="py-24">
    <div className="container">
      <h2 className="section-title mb-4">ফটো <span className="gold-text">গ্যালারি</span></h2>
      <p className="text-center text-muted-foreground mb-12">আমাদের ক্যামেরাবন্দি কিছু সুন্দর মুহূর্ত</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((p) => (
          <figure key={p.title} className="group relative overflow-hidden rounded-2xl gold-border">
            <img src={p.img} alt={p.title} loading="lazy" width={700} height={700} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-center font-semibold">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoGallery;
