import { cn } from "@/utils/misc";

interface LogoProps {
  variant?: "mark" | "wordmark" | "parent";
  width?: number;
  height?: number;
  className?: string;
  [key: string]: unknown | undefined;
}

export function Logo({
  variant = "mark",
  width,
  height,
  className,
  ...args
}: LogoProps) {
  const variants = {
    mark: {
      src: "/images/aritq-Q-icon-transparant-bg.png",
      alt: "Artiq Breeze",
      w: 40,
      h: 40,
    },
    wordmark: {
      src: "/images/airtiqbreeze-logo-transparent-bg.png",
      alt: "Artiq Breeze",
      w: 180,
      h: 48,
    },
    parent: {
      src: "/images/artiq-logo-transparent-bg.png",
      alt: "Artiq",
      w: 150,
      h: 40,
    },
  } as const;

  const selected = variants[variant] ?? variants.mark;

  return (
    <img
      {...args}
      src={selected.src}
      alt={selected.alt}
      width={width ?? selected.w}
      height={height ?? selected.h}
      className={cn("inline-block object-contain", className)}
      loading="lazy"
    />
  );
}
