
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Settings } from "lucide-react";

const results = [
  "API segura e integrada com serviço externo",
  "Versionamento preparado para evolução dos contratos", 
  "Gestão do ciclo de vida via API Gateway",
  "Documentação pronta para parceiros e front-end",
  "Estrutura que simula cenários reais de integração entre empresas"
];

export const ProjectResults = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-green-50 border-green-200">
            Resultados Alcançados
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Settings className="w-10 h-10 text-green-600" />
            Resultado
          </h2>
        </div>

        <div className="grid gap-4">
          {results.map((result, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium text-lg">{result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
