import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import InteractiveDemo from '@/components/InteractiveDemo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <InteractiveDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
