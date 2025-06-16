
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Code, Download, ExternalLink } from "lucide-react";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/products",
    description: "Lista todos os produtos com conversão de moeda",
    auth: "JWT Required",
    params: "currency (optional)"
  },
  {
    method: "POST", 
    path: "/api/auth/login",
    description: "Autenticação de usuário",
    auth: "Public",
    params: "username, password"
  },
  {
    method: "GET",
    path: "/api/v2/products/{id}",
    description: "Busca produto específico (v2 com cache)",
    auth: "JWT Required", 
    params: "id (path), currency (optional)"
  },
  {
    method: "GET",
    path: "/api/currency/rates",
    description: "Taxas de câmbio atuais",
    auth: "API Key",
    params: "base_currency (optional)"
  },
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navigation />
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Documentação da API</h1>
          <p className="text-gray-600">Swagger/OpenAPI 3.0 • Contratos e exemplos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Quick Start</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-800">Base URL</p>
                <code className="text-blue-600">https://api.exemplo.com</code>
              </div>
              <div>
                <p className="font-medium text-gray-800">Autenticação</p>
                <code className="text-gray-600">Bearer {"{token}"}</code>
              </div>
              <div>
                <p className="font-medium text-gray-800">Content-Type</p>
                <code className="text-gray-600">application/json</code>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Swagger JSON
              </Button>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Swagger UI
              </Button>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Endpoints</h3>
            </div>
            
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge 
                      className={
                        endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                        endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{endpoint.description}</p>
                  
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-gray-500">Auth: </span>
                      <span className={endpoint.auth === 'Public' ? 'text-green-600' : 'text-orange-600'}>
                        {endpoint.auth}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Params: </span>
                      <span className="text-gray-700">{endpoint.params}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemplo de Request</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <pre>{`curl -X GET "https://api.exemplo.com/api/v1/products" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -G -d "currency=USD"`}</pre>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemplo de Response</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <pre>{`{
  "data": [
    {
      "id": 1,
      "name": "Produto A",
      "price": 99.90,
      "currency": "USD"
    }
  ],
  "meta": {
    "total": 1,
    "page": 1
  }
}`}</pre>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Documentação Interativa</h3>
              <p className="opacity-90">Explore e teste todos os endpoints diretamente no Swagger UI</p>
            </div>
            <Button variant="secondary" size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Abrir Swagger UI
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
