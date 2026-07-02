import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ==========================================
// 1. DISPLAY COMPONENT
// ==========================================
const displayVariants = cva(
  "font-sans font-extrabold tracking-tight text-foreground leading-[1.1]",
  {
    variants: {
      size: {
        lg: "text-5xl sm:text-6xl md:text-7xl",
        md: "text-4xl sm:text-5xl md:text-6xl",
        sm: "text-3xl sm:text-4xl md:text-5xl",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface DisplayProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof displayVariants> {
  asChild?: boolean;
}

export const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "h1";
    return <Component className={cn(displayVariants({ size }), className)} ref={ref} {...props} />;
  }
);
Display.displayName = "Display";

// ==========================================
// 2. HEADING COMPONENT
// ==========================================
const headingVariants = cva("font-sans font-bold tracking-tight text-foreground", {
  variants: {
    level: {
      h1: "text-3xl sm:text-4xl leading-tight",
      h2: "text-2xl sm:text-3xl leading-snug",
      h3: "text-xl sm:text-2xl leading-normal",
      h4: "text-lg sm:text-xl leading-normal",
      h5: "text-base font-semibold leading-normal",
      h6: "text-sm font-semibold leading-normal",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : level || "h2";
    return <Component className={cn(headingVariants({ level }), className)} ref={ref} {...props} />;
  }
);
Heading.displayName = "Heading";

// ==========================================
// 3. TEXT COMPONENT
// ==========================================
const textVariants = cva("font-sans leading-relaxed text-foreground", {
  variants: {
    variant: {
      lead: "text-lg text-muted-foreground font-medium",
      body: "text-base text-foreground",
      subtext: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "p";
    return <Component className={cn(textVariants({ variant }), className)} ref={ref} {...props} />;
  }
);
Text.displayName = "Text";

// ==========================================
// 4. OVERLINE COMPONENT
// ==========================================
export const Overline = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot : "span";
  return (
    <Component
      ref={ref}
      className={cn(
        "font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 select-none",
        className
      )}
      {...props}
    />
  );
});
Overline.displayName = "Overline";

// ==========================================
// 5. CAPTION COMPONENT
// ==========================================
export const Caption = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot : "span";
  return (
    <Component
      ref={ref}
      className={cn("font-sans text-xs text-muted-foreground leading-none", className)}
      {...props}
    />
  );
});
Caption.displayName = "Caption";

// ==========================================
// 6. CODE COMPONENT
// ==========================================
export const Code = React.forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot : "code";
  return (
    <Component
      ref={ref}
      className={cn(
        "font-mono text-sm bg-muted px-1.5 py-0.5 rounded border border-border text-foreground font-medium",
        className
      )}
      {...props}
    />
  );
});
Code.displayName = "Code";

// ==========================================
// 7. LABEL COMPONENT
// ==========================================
export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "font-sans text-xs font-semibold leading-none select-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      error && "text-destructive",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// ==========================================
// 8. LINK COMPONENT
// ==========================================
const linkVariants = cva(
  "font-sans font-medium transition-all duration-150 relative cursor-pointer outline-none rounded-sm",
  {
    variants: {
      variant: {
        default: "text-primary hover:text-primary/80 focus-visible:ring-1 focus-visible:ring-ring",
        underline: "text-foreground hover:underline decoration-1 underline-offset-4",
        muted:
          "text-muted-foreground hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "a";
    return <Component ref={ref} className={cn(linkVariants({ variant }), className)} {...props} />;
  }
);
Link.displayName = "Link";
