import { Github, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-xl font-bold font-mono">
            <span className="text-gradient">{'<'}</span>
            Андрій
            <span className="text-gradient">{' />'}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/M1rwana12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/imSenya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="mailto:senja32082@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Всі права захищено
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
