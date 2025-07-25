import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import React from "react";

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
        </div>
        <Badge variant="outline">About Page</Badge>
      </div>
    </main>
  );
};

export default About;
