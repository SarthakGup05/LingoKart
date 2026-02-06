import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      // Changed to 'bg-slate-200/70' for a softer look
      // Changed to 'rounded-xl' to match your UI containers
      className={`animate-pulse rounded-xl bg-slate-200/70 ${className}`}
      {...props}
    />
  );
}