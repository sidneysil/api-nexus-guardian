
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Lightbulb } from "lucide-react";

export const ProjectConclusion = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 border-blue-200">
            Reflexões Finais
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="w-10 h-10 text-blue-600" />
            Conclusão
          </h2>
        </div>

        <Card className="p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white border-0 shadow-2xl">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-yellow-300 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xl leading-relaxed">
                Esse projeto me permitiu consolidar práticas modernas de{" "}
                <span className="font-semibold text-yellow-300">integração segura entre sistemas</span>, 
                com foco em versionamento, API Gateway e autenticação com JWT.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Projeto Finalizado com Sucesso</span>
          </div>
        </div>
      </div>
    </section>
  );
};
