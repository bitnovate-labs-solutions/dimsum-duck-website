import { site } from "@/content";

type BrandNameProps = {
  className?: string;
  children?: React.ReactNode;
};

export function BrandName({ className, children }: BrandNameProps) {
  return (
    <span className={["brand-wordmark", className].filter(Boolean).join(" ")}>
      {children ?? site.name}
    </span>
  );
}
