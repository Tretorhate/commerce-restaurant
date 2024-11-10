import { cn } from "@/shared/lib/utils";
import { useTheme } from "next-themes";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  const theme = useTheme();

  return (
    <img
      className={cn(
        "w-[60px] h-[60px]",
        className,
        theme.resolvedTheme === "dark" ? "invert" : ""
      )}
      src={src}
    />
  );
};
