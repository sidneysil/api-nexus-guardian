
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, BarChart3, Settings, Shield, Activity, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Projeto", icon: Home },
  { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { path: "/api-manager", label: "API Manager", icon: Settings },
  { path: "/auth", label: "Autenticação", icon: Shield },
  { path: "/monitoring", label: "Monitoramento", icon: Activity },
  { path: "/docs", label: "Documentação", icon: FileText },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <nav className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <Button 
                variant={isActive ? "default" : "outline"} 
                className={`flex items-center gap-2 ${isActive ? 'bg-blue-600' : ''}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </Card>
  );
};
