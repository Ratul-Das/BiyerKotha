import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">যোগাযোগ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            আমাদের সাথে <span className="text-gradient-gold">কথা বলুন</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              আপনার প্রজেক্ট নিয়ে আলোচনা করতে চাইলে আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনার সেবায় প্রস্তুত।
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ফোন</p>
                  <p className="text-foreground font-medium">01890-189901</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ইমেইল</p>
                  <p className="text-foreground font-medium">biyerkotha444@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ঠিকানা</p>
                  <p className="text-foreground font-medium">মিরের বাজার, পূবাইল, গাজীপুর</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">আপনার নাম</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="নাম লিখুন"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">ইমেইল</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="ইমেইল লিখুন"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">বার্তা</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="আপনার বার্তা লিখুন..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold"
            >
              পাঠিয়ে দিন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
