
import { Navigation } from "@/components/Navigation";
import { AuthManager } from "@/components/AuthManager";

const AuthSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sistema de Autenticação</h1>
          <p className="text-gray-600">Demonstração de autenticação JWT com Spring Security</p>
        </div>

        <AuthManager />
      </div>
    </div>
  );
};

export default AuthSystem;
