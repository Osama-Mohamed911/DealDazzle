import { cn } from "@/lib/utils";
import React from "react";
interface props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: props) => {
  return (
    <div
      className={cn("py-10 max-w-screen-lg mx-auto px-4 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default Container;
