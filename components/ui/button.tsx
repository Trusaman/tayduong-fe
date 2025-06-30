import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform active:scale-95",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-primary text-white shadow-medium hover:shadow-strong hover:scale-105 hover:-translate-y-0.5",
                medical:
                    "bg-gradient-medical text-white shadow-medium hover:shadow-strong hover:scale-105 hover:-translate-y-0.5",
                trust: "bg-gradient-trust text-white shadow-medium hover:shadow-strong hover:scale-105 hover:-translate-y-0.5",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-medium hover:bg-destructive/90 hover:shadow-strong hover:scale-105",
                outline:
                    "border-2 border-primary bg-background text-primary shadow-soft hover:bg-primary hover:text-white hover:shadow-medium hover:scale-105",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80 hover:shadow-medium hover:scale-105",
                ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-soft hover:scale-105",
                link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
            },
            size: {
                default: "h-10 px-6 py-2 text-sm",
                sm: "h-8 rounded-md px-4 text-xs",
                lg: "h-12 rounded-xl px-10 text-base font-semibold",
                xl: "h-14 rounded-xl px-12 text-lg font-semibold",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
