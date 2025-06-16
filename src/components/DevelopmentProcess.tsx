
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain } from "lucide-react";

const processes = [
  {
    step: "01",
    title: "APIs RESTful + Conversão de Moedas",
    description: "Criei endpoints RESTful que expõem dados de produtos internos e convertem preços em tempo real usando uma API de câmbio externa."
  },
  {
    step: "02", 
    title: "Autenticação JWT",
    description: "Implementei autenticação com JWT, garantindo que apenas usuários autenticados acessem os recursos."
  },
  {
    step: "03",
    title: "Integração API Externa",
    description: "Integrei o consumo da API externa com WebClient e proteção via API Key."
  },
  {
    step: "04",
    title: "Kong API Gateway",
    description: "Configurei o Kong API Gateway para simular roteamento, autenticação e versionamento no ambiente local."
  },
  {
    step: "05",
    title: "Documentação Swagger",
    description: "Toda API foi documentada com Swagger, incluindo suporte à autenticação JWT diretamente na interface."
  },
  {
    step: "06",
    title: "CI/CD Pipeline",
    description: "O projeto foi versionado no Git com pipeline no GitHub Actions para build, testes e geração de imagens Docker."
  }
];

export const DevelopmentProcess = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-purple-50 border-purple-200">
            Processo de Desenvolvimento
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-purple-600" />
            Como foi o desenvolvimento
          </h2>
        </div>

        <div className="space-y-6">
          {processes.map((process, index) => (
            <div key={index} className="flex items-start gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {process.step}
                </div>
              </div>
              
              <Card className="flex-1 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      {process.title}
                      <ArrowRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
