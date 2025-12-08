import { Code2, Globe, Database, Bot, Cog, Server } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Програмування',
    items: ['C#', 'Python', 'JavaScript/TypeScript', 'SQL'],
    color: 'from-primary to-accent',
  },
  {
    icon: Globe,
    title: 'Веб-розробка',
    items: ['React / Vue', 'HTML/CSS', 'REST API', 'Панелі керування'],
    color: 'from-accent to-primary',
  },
  {
    icon: Database,
    title: 'Бази даних',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    color: 'from-primary to-accent',
  },
  {
    icon: Bot,
    title: 'Розробка ботів',
    items: ['Telegram боти', 'Discord боти', 'Автоматизація', 'Аналітика'],
    color: 'from-accent to-primary',
  },
  {
    icon: Cog,
    title: 'Автоматизація',
    items: ['Скрипти', 'Моніторинг', 'Парсинг даних', 'CI/CD'],
    color: 'from-primary to-accent',
  },
  {
    icon: Server,
    title: 'DevOps',
    items: ['Docker', 'Linux', 'Nginx', 'AWS/GCP'],
    color: 'from-accent to-primary',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Мої <span className="text-gradient">навички</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр технологій для вирішення будь-яких задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group glass rounded-2xl p-6 hover-lift cursor-default opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-all duration-300">
                {skill.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
