import React, { useState, forwardRef, ReactElement } from "react";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const stepperStyles = cva(
  [
    "flex flex-col gap-4 justify-between items-center w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed bg-white-100 p-4",
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

export type Step = {
  component: ReactElement;
  title: string;
  data?: any;
};

interface StepperProps {
  steps: Step[];
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const { steps } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const isStepOptional = (step: number) => step === 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSubmissionCompleted(true);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => {
    setActiveStep(0);
    setSubmissionCompleted(false);
    setFormData({});
  };

  const handleStepDataChange = (stepData: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [activeStep]: stepData,
    }));
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <div ref={ref} className={cn(stepperStyles(), "stepper")}>
      {submissionCompleted && (
        <div className="text-green-500 font-bold">Completed!</div>
      )}
      <div className="flex gap-4">
        {steps.map((step, index) => {
          const stepProps: { "aria-completed"?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <span className="text-xs text-gray-400">Optional</span>
            );
          }
          if (index < activeStep) {
            stepProps["aria-completed"] = true;
          } else {
            stepProps["aria-completed"] = false;
          }
          return (
            <div className="w-full flex items-center" key={index}>
              <div
                className={cn("flex items-center", {
                  "opacity-50": index !== activeStep,
                })}
              >
                <div className="flex-shrink-0 relative">
                  {index < activeStep ? (
                    <svg
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.79506 10.3749L2.32506 6.90489C2.13823 6.71764 1.88458 6.6124 1.62006 6.6124C1.35554 6.6124 1.10189 6.71764 0.915059 6.90489C0.525059 7.29489 0.525059 7.92489 0.915059 8.31489L5.09506 12.4949C5.48506 12.8849 6.11506 12.8849 6.50506 12.4949L17.0851 1.91489C17.4751 1.52489 17.4751 0.894888 17.0851 0.504888C16.8982 0.317635 16.6446 0.212402 16.3801 0.212402C16.1155 0.212402 15.8619 0.317635 15.6751 0.504888L5.79506 10.3749Z"
                        fill="black"
                      />
                    </svg>
                  ) : (
                    <div className="flex-shrink-0 rounded-full border-2 border-gray-300 w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="ml-2">
                  <span {...labelProps}>{step.title}</span>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="w-[10rem] h-[2px] bg-[#191919]" />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-end">
        <div className="flex gap-4">
          {activeStep > 0 && !submissionCompleted && (
            <button className="btn" onClick={handleBack}>
              Previous
            </button>
          )}
          {!isLastStep && !submissionCompleted && (
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          )}
          {isLastStep && !submissionCompleted && (
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        {submissionCompleted ? (
          <div>
            {steps.map((step, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">{step.title}</h3>
                <div className="p-2 bg-gray-100 rounded-md">
                  <pre>{JSON.stringify(formData[index], null, 2)}</pre>
                </div>
              </div>
            ))}
          </div>
        ) : (
          React.isValidElement(steps[activeStep].component) &&
          React.cloneElement(steps[activeStep].component, {
            onDataChange: handleStepDataChange,
            data: formData[activeStep] || {},
          })
        )}
      </div>
    </div>
  );
});

export default Stepper;
