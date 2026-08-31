import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import Team from "@/components/Team";
import Packages from "@/components/Packages";
import CorporatePackages from "@/components/CorporatePackages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <PhotoGallery />
      <VideoGallery />
      <Team />
      <Packages />
      <CorporatePackages />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
