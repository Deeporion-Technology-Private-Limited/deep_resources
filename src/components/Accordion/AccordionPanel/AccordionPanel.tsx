import React, { useState } from "react";

interface IAccordionProps {
  title: string;
  type: string;
  location: string;
  children?: React.ReactNode;
}

const AccordionPanel: React.FC<IAccordionProps> = ({
  title,
  type,
  location,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 shadow-lg">
      <button
        onClick={toggleAccordion}
        className={`w-full transform px-4 py-4 text-left transition-transform focus:outline-none ${isOpen ? "bg-[#3F271E] text-white" : "bg-white"} rounded-none`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[24px] font-bold">{title}</h3>
            <p
              className={`transform text-sm text-gray-500 transition-transform ${isOpen ? "text-white" : ""}`}
            >
              Type: {type} | Location: {location}
            </p>
          </div>
          <span
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          >
            &gt;
          </span>
        </div>
      </button>
      {isOpen && <div className="px-4 py-2">{children}</div>}
    </div>
  );
};

export default AccordionPanel;
