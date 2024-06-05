import React, { useState } from "react";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const stepperStyles = cva(
  [
    "flex",
    "flex-row",
    "justify-between",
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "bg-gray-100",
    "shadow-md",
    "p-4",
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type Step = {
  component: React.FC;
  title: string;
  completed: boolean;
};

type StepperProps = {
  steps: Step[];
};

const Stepper = forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const { steps } = props;
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div ref={ref} className={cn(stepperStyles(), "stepper")}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={cn("flex items-center", {
              "opacity-50": index !== currentStep,
            })}
          >
            <div className="flex-shrink-0 relative">
              {step.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 11.293a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414l5.5-5.5a1 1 0 1 1 1.414 1.414l-6 6z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <div className="flex-shrink-0 rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
              )}
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-8 h-0.5 bg-black w-full"></div>
              )}
            </div>
            <div className="ml-2">{step.title}</div>
          </div>
        </React.Fragment>
      ))}
      <div className="mt-4 flex gap-4">
        {currentStep > 0 && (
          <button className="btn" onClick={prevStep}>
            Previous
          </button>
        )}
        {!isLastStep && (
          <button className="btn" onClick={nextStep}>
            Next
          </button>
        )}
        {isLastStep && <button className="btn">Submit</button>}
      </div>
    </div>
  );
});

export default Stepper;
