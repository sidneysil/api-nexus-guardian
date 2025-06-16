
import { ProjectHero } from "@/components/ProjectHero";
import { TechStack } from "@/components/TechStack";
import { ProjectChallenge } from "@/components/ProjectChallenge";
import { DevelopmentProcess } from "@/components/DevelopmentProcess";
import { ProjectResults } from "@/components/ProjectResults";
import { ProjectConclusion } from "@/components/ProjectConclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ProjectHero />
      <TechStack />
      <ProjectChallenge />
      <DevelopmentProcess />
      <ProjectResults />
      <ProjectConclusion />
    </div>
  );
};

export default Index;
