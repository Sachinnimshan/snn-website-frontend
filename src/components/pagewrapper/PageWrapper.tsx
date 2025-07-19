import React from "react";

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function PageWrapper({
  title,
  description,
  children,
}: PageWrapperProps) {
  return (
    <div className="w-full pt-24 pb-12 px-4 sm:px-6 bg-black/60">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-400 text-center">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-sm sm:text-base text-gray-400 mb-6 text-center">
            {description}
          </p>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
