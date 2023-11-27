import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface props {
  className?: string;
  spanClassName?: string;
}
const Logo = ({ className, spanClassName }: props) => {
  return (
    <Link href={"/"} className={cn("text-zinc-950 text-xl group  ", className)}>
      <span
        className={cn(
          " text-white w-8  h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 bg-designColor ",
          spanClassName
        )}
      >
        D
      </span>
      DealDazzle
    </Link>
  );
};

export default Logo;
