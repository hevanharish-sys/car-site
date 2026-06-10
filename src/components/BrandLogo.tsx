type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = 'h-8 w-auto object-contain' }: BrandLogoProps) {
  return (
    <img
      src="/logo-transparent.png"
      alt="H2T Technologies Logo"
      className={className}
    />
  );
}
