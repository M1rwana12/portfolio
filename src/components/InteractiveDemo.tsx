import { useState } from 'react';
import { Play, Terminal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sqlQueries = [
  { query: 'SELECT * FROM users LIMIT 5', result: '5 rows returned in 12ms' },
  { query: 'INSERT INTO orders (user_id, amount) VALUES (1, 100)', result: 'INSERT 0 1 - Success' },
  { query: 'UPDATE products SET price = price * 0.9 WHERE category = "sale"', result: 'UPDATE 23 - 23 rows affected' },
  { query: 'CREATE INDEX idx_users_email ON users(email)', result: 'CREATE INDEX - Success' },
];

const botCommands = [
  { command: '/start', response: 'Вітаю! Я ваш бот-помічник. Чим можу допомогти?' },
  { command: '/order', response: '🛒 Ваше замовлення #1234 оформлено успішно!' },
  { command: '/status', response: '📦 Статус: В дорозі. Очікуваний час доставки: 2 дні' },
  { command: '/help', response: 'Доступні команди: /start, /order, /status, /help' },
];

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState<'sql' | 'bot'>('sql');
  const [sqlIndex, setSqlIndex] = useState(0);
  const [botIndex, setBotIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const runDemo = () => {
    setIsRunning(true);
    setShowResult(false);
    
    setTimeout(() => {
      setShowResult(true);
      setIsRunning(false);
    }, 1000);
  };

  const nextQuery = () => {
    if (activeTab === 'sql') {
      setSqlIndex((prev) => (prev + 1) % sqlQueries.length);
    } else {
      setBotIndex((prev) => (prev + 1) % botCommands.length);
    }
    setShowResult(false);
  };

  const currentSql = sqlQueries[sqlIndex];
  const currentBot = botCommands[botIndex];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Інтерактивне <span className="text-gradient">демо</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Спробуйте самі! Запустіть SQL запит або команду бота
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={activeTab === 'sql' ? 'default' : 'outline'}
              onClick={() => { setActiveTab('sql'); setShowResult(false); }}
            >
              SQL Playground
            </Button>
            <Button
              variant={activeTab === 'bot' ? 'default' : 'outline'}
              onClick={() => { setActiveTab('bot'); setShowResult(false); }}
            >
              Bot Simulator
            </Button>
          </div>

          {/* Demo Container */}
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm text-muted-foreground font-mono ml-2">
                {activeTab === 'sql' ? 'PostgreSQL Terminal' : 'Telegram Bot'}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-sm">
              {/* Input */}
              <div className="flex items-start gap-3 mb-4">
                <Terminal className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <span className="text-muted-foreground">
                    {activeTab === 'sql' ? '>' : 'User:'}
                  </span>
                  <span className="ml-2 text-foreground">
                    {activeTab === 'sql' ? currentSql.query : currentBot.command}
                  </span>
                </div>
              </div>

              {/* Output */}
              {isRunning && (
                <div className="flex items-center gap-2 text-muted-foreground ml-8 mb-4">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span>Виконується...</span>
                </div>
              )}

              {showResult && (
                <div className="flex items-start gap-3 ml-8 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-primary">
                    {activeTab === 'sql' ? currentSql.result : currentBot.response}
                  </span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 px-6 pb-6">
              <Button onClick={runDemo} disabled={isRunning} className="gap-2">
                <Play className="w-4 h-4" />
                Запустити
              </Button>
              <Button variant="outline" onClick={nextQuery}>
                Наступний приклад
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
