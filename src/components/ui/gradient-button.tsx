import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ButtonProps } from "@radix-ui/react-button";

export function GradientButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition-all",
        className,
      )}
      {...props}
    />
  );
}
