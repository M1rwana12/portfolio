import { useState } from 'react';
import { X, Bot, Database, Globe, Cog, Play, Terminal, MessageCircle, BarChart3, Server, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectDemoModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    color: string;
  } | null;
  onClose: () => void;
}

const ProjectDemoModal = ({ project, onClose }: ProjectDemoModalProps) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!project) return null;

  const demos: Record<number, { tabs: string[]; content: React.ReactNode[] }> = {
    1: {
      tabs: ['Чат-бот', 'Команди', 'Аналітика'],
      content: [
        // Chat demo
        <div key="chat" className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-blue-500/20">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <div className="glass rounded-2xl rounded-tl-none p-4 max-w-[80%]">
              <p className="text-sm">Вітаю! Я бот для автоматизації вашого бізнесу. Оберіть опцію:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['📦 Замовлення', '💳 Оплата', '📊 Статистика', '❓ Підтримка'].map((btn) => (
                  <button key={btn} className="px-3 py-1.5 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="glass rounded-2xl rounded-tr-none p-4 max-w-[80%] bg-primary/10">
              <p className="text-sm">📦 Замовлення</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-blue-500/20">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <div className="glass rounded-2xl rounded-tl-none p-4 max-w-[80%]">
              <p className="text-sm">Ваші активні замовлення:</p>
              <div className="mt-3 space-y-2">
                {[
                  { id: '#1234', status: 'В обробці', date: '05.12.2024' },
                  { id: '#1233', status: 'Доставлено', date: '03.12.2024' },
                ].map((order) => (
                  <div key={order.id} className="flex justify-between text-xs p-2 rounded bg-secondary/50">
                    <span className="text-primary">{order.id}</span>
                    <span className="text-muted-foreground">{order.status}</span>
                    <span className="text-muted-foreground">{order.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        // Commands demo
        <div key="commands" className="space-y-3 font-mono text-sm">
          {[
            { cmd: '/start', desc: 'Запустити бота' },
            { cmd: '/orders', desc: 'Список замовлень' },
            { cmd: '/pay [id]', desc: 'Оплатити замовлення' },
            { cmd: '/stats', desc: 'Статистика продажів' },
            { cmd: '/notify [on/off]', desc: 'Сповіщення' },
            { cmd: '/support', desc: "Зв'язок з підтримкою" },
          ].map((item) => (
            <div key={item.cmd} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <code className="text-primary">{item.cmd}</code>
              <span className="text-muted-foreground">— {item.desc}</span>
            </div>
          ))}
        </div>,
        // Analytics demo
        <div key="analytics" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Користувачів', value: '2,847', change: '+12%' },
              { label: 'Замовлень', value: '1,293', change: '+8%' },
              { label: 'Дохід', value: '₴89,400', change: '+23%' },
              { label: 'Конверсія', value: '4.2%', change: '+0.5%' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl glass">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-primary mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>,
      ],
    },
    2: {
      tabs: ['Дашборд', 'Користувачі', 'Налаштування'],
      content: [
        // Dashboard demo
        <div key="dashboard" className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: BarChart3, label: 'Продажі', value: '₴234K' },
              { icon: MessageCircle, label: 'Заявки', value: '156' },
              { icon: Globe, label: 'Відвідувачі', value: '8.2K' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl glass text-center">
                <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-lg font-bold">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="h-32 rounded-xl glass p-4">
            <div className="text-sm text-muted-foreground mb-2">Графік продажів</div>
            <div className="flex items-end justify-between h-20 gap-1">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary transition-all hover:from-primary/70 hover:to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>,
        // Users demo
        <div key="users" className="space-y-2">
          {[
            { name: 'Олександр К.', email: 'alex@mail.com', role: 'Admin', status: 'active' },
            { name: 'Марія П.', email: 'maria@mail.com', role: 'Manager', status: 'active' },
            { name: 'Іван С.', email: 'ivan@mail.com', role: 'User', status: 'inactive' },
          ].map((user) => (
            <div key={user.email} className="flex items-center justify-between p-3 rounded-lg glass">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {user.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded bg-secondary">{user.role}</span>
                <span className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-primary' : 'bg-muted'}`} />
              </div>
            </div>
          ))}
        </div>,
        // Settings demo
        <div key="settings" className="space-y-4">
          {[
            { label: 'Email сповіщення', enabled: true },
            { label: 'Push сповіщення', enabled: false },
            { label: 'Двофакторна автентифікація', enabled: true },
            { label: 'API доступ', enabled: true },
          ].map((setting) => (
            <div key={setting.label} className="flex items-center justify-between p-3 rounded-lg glass">
              <span className="text-sm">{setting.label}</span>
              <div className={`w-10 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-primary' : 'bg-muted'}`}>
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-4' : ''}`} />
              </div>
            </div>
          ))}
        </div>,
      ],
    },
    3: {
      tabs: ['Сервери', 'Алерти', 'Логи'],
      content: [
        // Servers demo
        <div key="servers" className="space-y-3">
          {[
            { name: 'api-prod-01', cpu: 45, memory: 62, status: 'healthy' },
            { name: 'db-master', cpu: 78, memory: 85, status: 'warning' },
            { name: 'cache-01', cpu: 23, memory: 34, status: 'healthy' },
          ].map((server) => (
            <div key={server.name} className="p-4 rounded-xl glass">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm">{server.name}</span>
                </div>
                <span className={`w-2 h-2 rounded-full ${server.status === 'healthy' ? 'bg-primary animate-pulse' : 'bg-orange-500 animate-pulse'}`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">CPU</div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className={`h-full rounded-full ${server.cpu > 70 ? 'bg-orange-500' : 'bg-primary'}`} style={{ width: `${server.cpu}%` }} />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Memory</div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className={`h-full rounded-full ${server.memory > 70 ? 'bg-orange-500' : 'bg-primary'}`} style={{ width: `${server.memory}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>,
        // Alerts demo
        <div key="alerts" className="space-y-2">
          {[
            { type: 'warning', message: 'High memory usage on db-master', time: '2 хв тому' },
            { type: 'info', message: 'Deployment completed successfully', time: '15 хв тому' },
            { type: 'error', message: 'Connection timeout to external API', time: '1 год тому' },
          ].map((alert, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
              alert.type === 'error' ? 'bg-destructive/10 border border-destructive/20' :
              alert.type === 'warning' ? 'bg-orange-500/10 border border-orange-500/20' :
              'bg-primary/10 border border-primary/20'
            }`}>
              <AlertCircle className={`w-4 h-4 mt-0.5 ${
                alert.type === 'error' ? 'text-destructive' :
                alert.type === 'warning' ? 'text-orange-500' :
                'text-primary'
              }`} />
              <div className="flex-1">
                <p className="text-sm">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>,
        // Logs demo
        <div key="logs" className="font-mono text-xs space-y-1 max-h-48 overflow-y-auto">
          {[
            { time: '14:32:01', level: 'INFO', msg: 'Request completed: GET /api/users (200)' },
            { time: '14:32:00', level: 'DEBUG', msg: 'Cache hit for key: user_session_abc123' },
            { time: '14:31:58', level: 'INFO', msg: 'New connection from 192.168.1.105' },
            { time: '14:31:55', level: 'WARN', msg: 'Slow query detected (1.2s): SELECT * FROM orders' },
            { time: '14:31:50', level: 'INFO', msg: 'Health check passed' },
          ].map((log, i) => (
            <div key={i} className="flex gap-2 p-2 rounded bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <span className="text-muted-foreground">{log.time}</span>
              <span className={`${
                log.level === 'ERROR' ? 'text-destructive' :
                log.level === 'WARN' ? 'text-orange-500' :
                log.level === 'DEBUG' ? 'text-muted-foreground' :
                'text-primary'
              }`}>[{log.level}]</span>
              <span className="text-foreground">{log.msg}</span>
            </div>
          ))}
        </div>,
      ],
    },
    4: {
      tabs: ['Pipeline', 'Джерела', 'Результати'],
      content: [
        // Pipeline demo
        <div key="pipeline" className="space-y-4">
          <div className="flex items-center justify-between">
            {['Extract', 'Transform', 'Load'].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  i === 1 ? 'bg-primary animate-pulse-glow' : 'bg-secondary'
                }`}>
                  {i === 0 && <Database className="w-5 h-5" />}
                  {i === 1 && <Cog className="w-5 h-5 animate-spin" />}
                  {i === 2 && <Server className="w-5 h-5" />}
                </div>
                {i < 2 && <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-2" />}
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl glass">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Обробка даних</span>
              <span className="text-xs text-primary">67%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">Оброблено: 1.2M / 1.8M записів</div>
          </div>
        </div>,
        // Sources demo
        <div key="sources" className="space-y-2">
          {[
            { name: 'PostgreSQL (prod)', records: '2.4M', status: 'connected' },
            { name: 'MongoDB Atlas', records: '890K', status: 'connected' },
            { name: 'REST API', records: '156K', status: 'syncing' },
            { name: 'CSV Files', records: '45K', status: 'connected' },
          ].map((source) => (
            <div key={source.name} className="flex items-center justify-between p-3 rounded-lg glass">
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-sm">{source.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{source.records}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  source.status === 'syncing' ? 'bg-orange-500/20 text-orange-400' : 'bg-primary/20 text-primary'
                }`}>
                  {source.status}
                </span>
              </div>
            </div>
          ))}
        </div>,
        // Results demo
        <div key="results" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl glass text-center">
              <div className="text-2xl font-bold text-gradient">3.5M</div>
              <div className="text-xs text-muted-foreground">Записів оброблено</div>
            </div>
            <div className="p-4 rounded-xl glass text-center">
              <div className="text-2xl font-bold text-gradient">99.8%</div>
              <div className="text-xs text-muted-foreground">Якість даних</div>
            </div>
          </div>
          <div className="p-4 rounded-xl glass">
            <Terminal className="w-4 h-4 text-muted-foreground mb-2" />
            <code className="text-xs text-primary">
              Pipeline completed successfully in 4m 23s
            </code>
          </div>
        </div>,
      ],
    },
  };

  const currentDemo = demos[project.id] || demos[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl glass rounded-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className={`p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            {currentDemo.tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${
                  activeTab === i 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[300px]">
          {currentDemo.content[activeTab]}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex justify-between items-center">
          <div className="flex gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <Button variant="hero" size="sm" className="gap-2">
            <Play className="w-4 h-4" />
            Замовити подібний проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemoModal;
