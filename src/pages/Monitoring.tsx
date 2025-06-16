
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, TrendingUp, Clock, Database, Cpu } from "lucide-react";

const metrics = [
  { label: "CPU Usage", value: "45%", status: "normal", icon: Cpu },
  { label: "Memory", value: "2.1GB", status: "normal", icon: Database },
  { label: "Response Time", value: "120ms", status: "good", icon: Clock },
  { label: "Error Rate", value: "0.01%", status: "good", icon: AlertTriangle },
];

const logs = [
  { level: "INFO", message: "API v2/products endpoint accessed", timestamp: "2024-01-15 14:30:15" },
  { level: "WARN", message: "Rate limit approached for user 847", timestamp: "2024-01-15 14:29:45" },
  { level: "INFO", message: "JWT token refreshed successfully", timestamp: "2024-01-15 14:28:30" },
  { level: "ERROR", message: "External API timeout - retrying", timestamp: "2024-01-15 14:27:12" },
  { level: "INFO", message: "Database connection pool optimized", timestamp: "2024-01-15 14:25:00" },
];

const Monitoring = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Monitoramento</h1>
          <p className="text-gray-600">Métricas e logs em tempo real</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  metric.status === 'good' ? 'bg-green-100 text-green-600' :
                  metric.status === 'normal' ? 'bg-blue-100 text-blue-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Logs do Sistema</h3>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 text-sm">
                  <Badge 
                    variant="outline"
                    className={
                      log.level === 'ERROR' ? 'border-red-200 text-red-700' :
                      log.level === 'WARN' ? 'border-yellow-200 text-yellow-700' :
                      'border-green-200 text-green-700'
                    }
                  >
                    {log.level}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-gray-700">{log.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Estatísticas</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Requests hoje</p>
                <p className="text-2xl font-bold text-gray-800">24,567</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Uptime</p>
                <p className="text-2xl font-bold text-green-600">99.94%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">APIs ativas</p>
                <p className="text-2xl font-bold text-blue-600">12/12</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Usuários online</p>
                <p className="text-2xl font-bold text-purple-600">847</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sistema Saudável</h3>
              <p className="opacity-90">Todos os serviços operando normalmente • Latência baixa • Zero incidentes</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Activity className="w-8 h-8" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Monitoring;
