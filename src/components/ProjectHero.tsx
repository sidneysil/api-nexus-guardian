
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

export const ProjectHero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Target className="w-8 h-8 text-blue-600" />
            <Badge variant="outline" className="text-lg py-2 px-4 bg-blue-50 border-blue-200">
              Projeto Pessoal
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Integração Segura
            <br />
            de APIs
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Spring Boot + API Gateway + JWT + Consumo de API Externa
          </p>
        </div>

        <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
          <div className="flex items-start gap-4">
            <Rocket className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Recentemente finalizei um projeto pessoal com foco em desenvolver uma{" "}
                <span className="font-semibold text-blue-600">API RESTful segura e escalável</span>, 
                integrando sistemas internos e externos. A ideia foi criar um backend moderno, 
                preparado para produção e alinhado às melhores práticas de integração, 
                segurança e gestão do ciclo de vida de APIs.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
