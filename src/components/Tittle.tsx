import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

const Tittle = ({ title, className }: Props) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold pb-5 border-b-[1px] border-b-zinc-400 pt-20",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default Tittle;
