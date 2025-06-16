
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Loader2, Shield, User, Lock, LogOut } from "lucide-react";
import { useLogin } from '@/services/apiService';
import { toast } from "sonner";

export const AuthManager = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  
  const loginMutation = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    try {
      await loginMutation.mutateAsync({ username, password });
      setIsLoggedIn(true);
      toast.success('Login realizado com sucesso!');
      setUsername('');
      setPassword('');
    } catch (error) {
      toast.error('Erro no login. Verifique suas credenciais.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast.success('Logout realizado com sucesso!');
  };

  const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  };

  const user = getCurrentUser();

  if (isLoggedIn && user) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            Usuário Autenticado
          </h2>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-800">{user.username}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Permissões:</p>
            <div className="flex gap-2">
              {user.roles.map((role: string) => (
                <Badge key={role} className="bg-blue-100 text-blue-800">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Token JWT:</strong> {localStorage.getItem('authToken')?.substring(0, 30)}...
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Lock className="w-6 h-6 text-blue-600" />
          Autenticação JWT
        </h2>
        <p className="text-gray-600">Faça login para acessar o sistema</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="username">Usuário</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu usuário"
            disabled={loginMutation.isPending}
          />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            disabled={loginMutation.isPending}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Entrando...
            </>
          ) : (
            'Entrar'
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Para demonstração:</strong><br />
          Usuário: admin<br />
          Senha: qualquer coisa
        </p>
      </div>
    </Card>
  );
};
