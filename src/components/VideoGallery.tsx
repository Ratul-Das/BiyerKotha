import { Play } from "lucide-react";

const videos = [
  { id: "I7yqxGuP6t4", title: "সিনেম্যাটিক বিবাহ ট্রেইলার" },
  { id: "qbHTaZVjxBE", title: "মুসলিম নিকাহ হাইলাইটস" },
  { id: "ZpNNfbkgzJI", title: "হিন্দু বিবাহ সিনেমা" },
];

const VideoGallery = () => {
  return (
    <section id="video-gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">ভিডিও গ্যালারি</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            আমাদের <span className="text-gradient-gold">ভিডিও সংকলন</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://youtu.be/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl aspect-video bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/50 flex flex-col items-center justify-center gap-3 group-hover:bg-background/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="w-7 h-7 text-primary ml-1" />
                </div>
                <h3 className="text-foreground font-bold text-sm">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
