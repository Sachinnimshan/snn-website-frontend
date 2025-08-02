// src/components/ToggleButtons.tsx
import React from "react";

interface ProjectsToggleProps {
  options: { label: string; value: boolean }[];
  selectedValue: boolean;
  onChange: (value: boolean) => void;
}

const ProjectsToggle: React.FC<ProjectsToggleProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex justify-center mb-6 space-x-2">
      {options.map(({ label, value }) => (
        <button
          key={label}
          className={`px-6 py-2  rounded-lg font-semibold uppercase transition border-2 border-secondaryColor  ${
            selectedValue === value
              ? "bg-secondaryColor text-primaryWhiteColor shadow-lg"
              : "bg-secondaryBgColor text-secondaryColor hover:border-secondaryColor hover:text-secondaryColor"
          }`}
          onClick={() => onChange(value)}
          aria-label={`Show ${label.toLowerCase()}`}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ProjectsToggle;
