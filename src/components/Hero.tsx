import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code2, Database, Bot, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Андрій — Full-Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-1/4 left-[10%] w-12 h-12 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        <Database className="absolute top-1/3 right-[15%] w-10 h-10 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
        <Bot className="absolute bottom-1/3 left-[20%] w-14 h-14 text-primary/20 animate-float" style={{ animationDelay: '2s' }} />
        <Zap className="absolute bottom-1/4 right-[10%] w-8 h-8 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Доступний для нових проектів</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-mono opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-foreground">{displayText}</span>
            <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Створюю <span className="text-gradient font-semibold">потужні веб-рішення</span>, автоматизую процеси, 
            розробляю ботів та працюю з базами даних будь-якої складності
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground">років досвіду</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">проектів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">задоволених клієнтів</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              Переглянути проекти
            </Button>
            <Button variant="glass" size="xl" onClick={scrollToContact}>
              Зв'язатися
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Прокрутіть вниз</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
