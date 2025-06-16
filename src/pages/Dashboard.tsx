import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Clock, CheckCircle, AlertTriangle, TrendingUp, Activity } from "lucide-react";

const stats = [
  { label: "APIs Ativas", value: "12", icon: BarChart3, color: "text-blue-600" },
  { label: "Usuários Conectados", value: "847", icon: Users, color: "text-green-600" },
  { label: "Uptime", value: "99.9%", icon: Clock, color: "text-purple-600" },
  { label: "Requests/min", value: "1,234", icon: TrendingUp, color: "text-orange-600" },
];

const recentActivity = [
  { action: "API Gateway configurado", status: "success", time: "2 min atrás" },
  { action: "JWT Token renovado", status: "success", time: "5 min atrás" },
  { action: "Endpoint /v2/products criado", status: "success", time: "12 min atrás" },
  { action: "Rate limit atingido", status: "warning", time: "25 min atrás" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sistema de APIs</h1>
          <p className="text-gray-600">Painel de controle completo</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Atividade Recente
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    {activity.status === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className="text-gray-700">{activity.action}</span>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Status do Sistema</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Spring Boot API</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Kong Gateway</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Banco de Dados</span>
                <Badge className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">API Externa</span>
                <Badge className="bg-yellow-100 text-yellow-800">Lenta</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
