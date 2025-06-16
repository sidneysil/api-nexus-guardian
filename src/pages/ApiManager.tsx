
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Settings, Play, Pause, Edit } from "lucide-react";

const apis = [
  {
    name: "Products API v1",
    endpoint: "/api/v1/products",
    status: "active",
    method: "GET",
    description: "Lista produtos com conversão de moeda",
    version: "1.0.0"
  },
  {
    name: "Products API v2",
    endpoint: "/api/v2/products",
    status: "active", 
    method: "GET",
    description: "Lista produtos com cache otimizado",
    version: "2.0.0"
  },
  {
    name: "Auth API",
    endpoint: "/api/auth/login",
    status: "active",
    method: "POST",
    description: "Autenticação JWT",
    version: "1.0.0"
  },
  {
    name: "Currency API",
    endpoint: "/api/currency/convert",
    status: "maintenance",
    method: "GET", 
    description: "Conversão de moedas externa",
    version: "1.0.0"
  },
];

const ApiManager = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Gerenciador de APIs</h1>
          <p className="text-gray-600">Controle e monitore seus endpoints</p>
        </div>

        <div className="grid gap-6">
          {apis.map((api, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{api.name}</h3>
                    <Badge 
                      className={
                        api.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {api.status}
                    </Badge>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Endpoint</p>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">{api.endpoint}</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Método</p>
                      <Badge variant="outline">{api.method}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Versão</p>
                      <span className="text-sm text-gray-700">{api.version}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Descrição</p>
                      <span className="text-sm text-gray-700">{api.description}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-6">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    {api.status === 'active' ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Kong API Gateway</h3>
              <p className="opacity-90">Gerencie roteamento, autenticação e rate limiting</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary">
                <Shield className="w-4 h-4 mr-2" />
                Configurar SSL
              </Button>
              <Button variant="secondary">
                <Settings className="w-4 h-4 mr-2" />
                Gateway Config
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ApiManager;
