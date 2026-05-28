import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export default function OptimizedImage({
  alt,
  className,
  decoding,
  loading,
  priority = false,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      alt={alt}
      className={className}
      decoding={decoding ?? 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      sizes={sizes ?? '(min-width: 1024px) 50vw, 100vw'}
      {...props}
    />
  );
}
