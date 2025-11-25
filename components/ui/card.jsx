import * as React from "react";
import { cn } from "../Lib/utils";
// import { cn } from "@/lib/utils";
// import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Core design
      "rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300",
      // Mobile-friendly adjustments
      "w-full max-w-full sm:max-w-none",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div
    className={cn(
      // Padding: smaller on mobile, normal on larger screens
      "flex flex-col space-y-1.5 p-4 sm:p-6",
      className
    )}
    {...props}
  />
);

const CardContent = ({ className, ...props }) => (
  <div
    className={cn(
      // Reduce padding on mobile and tighten top spacing
      "p-4 pt-0 sm:p-6 sm:pt-0",
      className
    )}
    {...props}
  />
);

export { Card, CardHeader, CardContent };
