
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap } from "lucide-react";

const challenges = [
  "Expor APIs RESTful com versionamento (v1, v2)",
  "Consumir dados de uma API externa com segurança (API Key)",
  "Proteger endpoints com JWT e controle de permissões (roles)",
  "Documentar contratos para facilitar integração com parceiros",
  "Preparar as APIs para gestão em API Gateway",
  "Garantir boas práticas de segurança, autenticação e performance"
];

export const ProjectChallenge = () => {
  return (
    <section className="py-16 px-6 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-orange-50 border-orange-200">
            Desafio Técnico
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📌 O Desafio
          </h2>
          <p className="text-xl text-gray-600">
            Criar uma solução que permitisse:
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl">
          <div className="grid gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 font-medium">{challenge}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
