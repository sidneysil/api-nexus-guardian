
import { Navigation } from "@/components/Navigation";
import { ProductManager } from "@/components/ProductManager";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Zap, Activity } from "lucide-react";
import { useApiStats } from '@/services/apiService';

const ApiIntegration = () => {
  const { data: stats, isLoading: statsLoading } = useApiStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Integração de APIs</h1>
          <p className="text-gray-600">Demonstração prática das integrações com backend</p>
        </div>

        {/* Stats da API */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {statsLoading ? '...' : stats?.totalRequests.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Requests</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100 text-green-600">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {statsLoading ? '...' : stats?.activeUsers}
                </p>
                <p className="text-sm text-gray-600">Usuários Ativos</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {statsLoading ? '...' : stats?.uptime}
                </p>
                <p className="text-sm text-gray-600">Uptime</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {statsLoading ? '...' : `${stats?.averageResponseTime}ms`}
                </p>
                <p className="text-sm text-gray-600">Tempo Resposta</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Integração de Produtos */}
        <ProductManager />

        {/* Informações sobre as integrações */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">APIs Integradas</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-800">Products API v1</p>
                  <p className="text-sm text-gray-600">/api/v1/products</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-800">Products API v2</p>
                  <p className="text-sm text-gray-600">/api/v2/products/{id}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-800">Currency API</p>
                  <p className="text-sm text-gray-600">/api/currency/rates</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Externa</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tecnologias Backend</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Spring Boot 3 + Java 17</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Spring Security 6 + JWT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">WebClient para APIs externas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Kong API Gateway</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700">Swagger/OpenAPI 3.0</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
