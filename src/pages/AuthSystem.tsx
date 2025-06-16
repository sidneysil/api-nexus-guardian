
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Key, Users, Lock, CheckCircle } from "lucide-react";
import { useState } from "react";

const AuthSystem = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  const handleLogin = () => {
    setIsAuthenticated(true);
    setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
  };

  const users = [
    { id: 1, username: "admin", role: "ADMIN", status: "online", lastLogin: "2 min atrás" },
    { id: 2, username: "developer", role: "DEV", status: "online", lastLogin: "15 min atrás" },
    { id: 3, username: "viewer", role: "VIEWER", status: "offline", lastLogin: "2 horas atrás" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sistema de Autenticação</h1>
          <p className="text-gray-600">JWT + Spring Security 6</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Login JWT</h3>
            </div>
            
            {!isAuthenticated ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <Input placeholder="Digite seu username" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input type="password" placeholder="Digite sua senha" />
                </div>
                <Button onClick={handleLogin} className="w-full">
                  <Key className="w-4 h-4 mr-2" />
                  Fazer Login
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Autenticado com sucesso!</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">JWT Token</label>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <code className="text-xs text-gray-600 break-all">{token}</code>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            )}
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Usuários Ativos</h3>
            </div>
            
            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${user.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <div>
                      <p className="font-medium text-gray-800">{user.username}</p>
                      <p className="text-xs text-gray-500">{user.lastLogin}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className={
                      user.role === 'ADMIN' 
                        ? 'border-red-200 text-red-700' 
                        : user.role === 'DEV'
                        ? 'border-blue-200 text-blue-700'
                        : 'border-gray-200 text-gray-700'
                    }
                  >
                    {user.role}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl">
          <div className="flex items-center gap-4">
            <Lock className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Configurações de Segurança</h3>
              <p className="opacity-90">JWT configurado com expiração de 24h • Rate limiting ativo • CORS habilitado</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AuthSystem;
