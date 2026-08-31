import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  { id: "I7yqxGuP6t4", title: "ওয়েডিং সিনেমাটিক ফিল্ম" },
  { id: "qbHTaZVjxBE", title: "বিয়ের হাইলাইট ভিডিও" },
  { id: "ZpNNfbkgzJI", title: "স্পেশাল মুহূর্ত" },
];

const VideoGallery = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <section id="videos" className="py-24 bg-card">
      <div className="container">
        <h2 className="section-title mb-4">ভিডিও <span className="gold-text">গ্যালারি</span></h2>
        <p className="text-center text-muted-foreground mb-12">আমাদের সিনেমাটিক কাজের নমুনা</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="rounded-2xl overflow-hidden gold-border bg-background">
              {playing === v.id ? (
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="relative block w-full group"
                  onClick={() => setPlaying(v.id)}
                  aria-label={`${v.title} চালান`}
                >
                  <img src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy" className="w-full aspect-video object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/20 transition-colors">
                    <span className="bg-primary text-primary-foreground rounded-full p-4"><Play className="w-8 h-8" /></span>
                  </span>
                </button>
              )}
              <p className="p-4 text-center font-semibold">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
