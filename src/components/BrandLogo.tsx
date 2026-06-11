type BrandLogoProps = {
  className?: string;
  /** Fixed display height in pixels */
  height?: number;
};

export function BrandLogo({ className = '', height = 32 }: BrandLogoProps) {
  return (
    <img
      src="/logo-transparent.png"
      alt="H2T Technologies Logo"
      className={`object-contain object-left block select-none bg-transparent ${className}`}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        height: `${height}px`,
        width: 'auto',
        maxWidth: `${Math.round(height * 3.2)}px`,
      }}
    />
  );
}
