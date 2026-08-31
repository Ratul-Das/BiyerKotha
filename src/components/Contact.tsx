import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`নতুন বুকিং অনুরোধ — ${form.name}`);
    const body = encodeURIComponent(`নাম: ${form.name}\nফোন: ${form.phone}\n\nবার্তা:\n${form.message}`);
    window.location.href = `mailto:biyerkotha3@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "ধন্যবাদ!", description: "আপনার ইমেইল অ্যাপে বার্তাটি প্রস্তুত করা হয়েছে।" });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title text-left mb-6">যোগাযোগ <span className="gold-text">করুন</span></h2>
          <p className="text-muted-foreground mb-8">আপনার অনুষ্ঠানের বিস্তারিত জানান, আমরা দ্রুত যোগাযোগ করব।</p>
          <ul className="space-y-5">
            <li className="flex gap-4 items-center"><Phone className="text-primary" /><span>01890-189901</span></li>
            <li className="flex gap-4 items-center"><Mail className="text-primary" /><span>biyerkotha444@gmail.com</span></li>
            <li className="flex gap-4 items-center"><MapPin className="text-primary" /><span>Mirer Bazar, Pubail, Gazipur</span></li>
          </ul>
        </div>
        <form onSubmit={submit} className="space-y-4 bg-background rounded-2xl p-8 gold-border">
          <Input required placeholder="আপনার নাম" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input required placeholder="ফোন নম্বর" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Textarea required rows={5} placeholder="আপনার বার্তা" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">পাঠান</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
