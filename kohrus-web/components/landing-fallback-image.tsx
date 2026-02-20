"use client";

/* eslint-disable @next/next/no-img-element -- Client component needs onError fallback; next/image does not support dynamic src + error handling the same way */
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** When image fails to load, show this instead. If undefined, render nothing on error. */
  fallback?: React.ReactNode;
  /** Required when fallback is used; wrapper for img + fallback. */
  wrapperClassName?: string;
};

export function LandingFallbackImage({ src, alt, className, fallback, wrapperClassName }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed && fallback != null && wrapperClassName != null) {
    return <div className={wrapperClassName}>{fallback}</div>;
  }
  if (failed) {
    return null;
  }
  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
  if (wrapperClassName != null && fallback != null) {
    return <div className={wrapperClassName}>{img}</div>;
  }
  return img;
}
