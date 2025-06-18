import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/stores";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { count, increment } = useAppStore();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
        </div>
        <Link to="/">
          <Badge variant="outline">Home Page</Badge>
        </Link>
        <Button onClick={increment}>Count is: {count}</Button>
      </div>
    </main>
  );
};

export default Home;
