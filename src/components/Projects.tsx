import { useState } from 'react';
import { ExternalLink, Github, Bot, Database, Globe, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDemoModal from './ProjectDemoModal';

const projects = [
  {
    id: 1,
    title: 'Telegram Bot для бізнесу',
    description: 'Автоматизований бот для обробки замовлень, інтеграція з CRM та платіжними системами',
    icon: Bot,
    tags: ['Python', 'Telegram API', 'PostgreSQL', 'Redis'],
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/M1rwana12',
  },
  {
    id: 2,
    title: 'CRM Панель керування',
    description: 'Повнофункціональна панель адміністратора з аналітикою, графіками та управлінням користувачами',
    icon: Globe,
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/M1rwana12',
  },
  {
    id: 3,
    title: 'Система моніторингу',
    description: 'Real-time моніторинг серверів та сервісів з алертами та автоматичним відновленням',
    icon: Cog,
    tags: ['Python', 'Docker', 'Prometheus', 'Grafana'],
    color: 'from-orange-500 to-red-500',
    github: 'https://github.com/M1rwana12',
  },
  {
    id: 4,
    title: 'ETL Pipeline',
    description: 'Система збору та обробки великих обсягів даних з різних джерел',
    icon: Database,
    tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS'],
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/M1rwana12',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Мої <span className="text-gradient">проекти</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Приклади робіт, які демонструють мої навички та підхід до вирішення задач
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative glass rounded-2xl overflow-hidden opacity-0 animate-fade-in hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} p-[1px]`}>
                    <div className="w-full h-full rounded-2xl bg-card" />
                  </div>
                </div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground border border-border group-hover:border-primary/30 transition-all duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        Код
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="gap-2 group/btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Демо
                    </Button>
                  </div>
                </div>

                {/* Hover Glow */}
                {hoveredId === project.id && (
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-30 blur-3xl transition-all duration-500`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {selectedProject && (
        <ProjectDemoModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Projects;
