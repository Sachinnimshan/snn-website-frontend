import React from "react";

interface ProjectsToggleProps<T extends string> {
  options: { label: string; value: T }[];
  selectedValue: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
}

function ProjectsToggle<T extends string>({
  options,
  selectedValue,
  onChange,
}: ProjectsToggleProps<T>) {
  return (
    <div className="flex justify-center mb-6 space-x-2">
      {options.map(({ label, value }) => (
        <button
          key={label}
          type="button"
          className={`px-6 py-2 rounded-lg font-semibold uppercase transition border-2 border-secondaryColor ${
            selectedValue === value
              ? "bg-secondaryColor text-primaryWhiteColor shadow-lg"
              : "bg-secondaryBgColor text-secondaryColor hover:border-secondaryColor hover:text-secondaryColor"
          }`}
          onClick={() => onChange(value)}
          aria-label={`Show ${label.toLowerCase()}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ProjectsToggle;
