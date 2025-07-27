import React from "react";

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  background?: string;
}

export default function PageWrapper({
  title,
  description,
  background,
  children,
}: PageWrapperProps) {
  return (
    <div
      className={`w-full pt-24 pb-12 px-4 sm:px-6 min-h-screen bg-secondaryBgColor ${background}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-primaryTextColor text-center uppercase tracking-wide">
              {title}
            </h1>
            {/* Line under title */}
            <div className="mx-auto mt-4 mb-4 w-10 h-1 bg-secondaryColor rounded"></div>
          </>
        )}
        {description && (
          <p className="text-sm sm:text-xl font-regular text-primaryTextColor mb-8 text-center">
            {description}
          </p>
        )}
        <div className="z-500">{children}</div>
      </div>
    </div>
  );
}
