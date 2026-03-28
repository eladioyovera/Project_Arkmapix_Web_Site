import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateBlurDataURL(width: number, height: number): string {
  const shimmer = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stop-color="#0F1825" offset="0%" />
          <stop stop-color="#1A2840" offset="50%" />
          <stop stop-color="#0F1825" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#0F1825" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    </svg>
  `;
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}
