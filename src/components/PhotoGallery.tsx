import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { img: gallery1, title: "মুসলিম বিবাহ", w: 800, h: 533 },
  { img: gallery2, title: "হিন্দু বিবাহ", w: 800, h: 533 },
  { img: gallery3, title: "বার্থডে ফটোশুট", w: 800, h: 533 },
  { img: gallery4, title: "নিকাহ মুহূর্ত", w: 800, h: 700 },
  { img: gallery5, title: "বর-কনে পোর্ট্রেট", w: 600, h: 800 },
  { img: gallery6, title: "কাপল ফটোগ্রাফি", w: 600, h: 800 },
];

const PhotoGallery = () => {
  return (
    <section id="photo-gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">ফটো গ্যালারি</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            আমাদের <span className="text-gradient-gold">ছবি সংকলন</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            >
              <img
                src={photo.img}
                alt={photo.title}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-foreground font-bold text-lg">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
