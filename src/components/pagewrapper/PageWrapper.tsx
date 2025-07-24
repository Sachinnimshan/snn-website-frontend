import React from "react";

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function PageWrapper({
  title,
  description,
  icon,
  children,
}: PageWrapperProps) {
  return (
    <div className="w-full pt-24 pb-12 px-4 sm:px-6 min-h-screen bg-primaryDark/75">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h1 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent text-center uppercase">
            {title}
            {icon}
          </h1>
        )}
        {description && (
          <p className="text-sm sm:text-base text-gray-300 mb-6 text-center">
            {description}
          </p>
        )}
        <div className="z-500">{children}</div>
      </div>
    </div>
  );
}
