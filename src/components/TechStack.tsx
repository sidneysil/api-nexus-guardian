
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Shield, 
  Globe, 
  FileText, 
  Settings, 
  GitBranch, 
  Container 
} from "lucide-react";

const technologies = [
  {
    icon: Wrench,
    title: "Java 17 + Spring Boot 3",
    description: "Base sólida para APIs modernas",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Shield,
    title: "Spring Security 6 com JWT",
    description: "Autenticação robusta e segura",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Globe,
    title: "WebClient + API Key",
    description: "Consumo seguro de APIs externas",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: FileText,
    title: "Swagger / OpenAPI",
    description: "Documentação e contratos",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Settings,
    title: "Kong API Gateway",
    description: "Versionamento e gerenciamento",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: GitBranch,
    title: "Git + GitHub Actions",
    description: "Versionamento e CI/CD",
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Container,
    title: "Docker",
    description: "Containerização para produção",
    color: "bg-cyan-100 text-cyan-600"
  }
];

export const TechStack = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 border-blue-200">
            Stack Tecnológica
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🧱 Tecnologias e Ferramentas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${tech.color}`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tech.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
