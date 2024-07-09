import React, { useState, forwardRef, ReactElement } from "react";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { stepperData } from "./StepperData";

const stepperStyles = cva(
  [
    "flex flex-col gap-4 justify-between items-center w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed bg-white p-4",
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSubmissionCompleted(true);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

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
  const check = "https://deepresources.s3.ap-south-1.amazonaws.com/images/Check.svg";

  return (
    <div
      ref={ref}
      className={cn(stepperStyles(), "stepper card p-4 border rounded-lg")}
    >
      {submissionCompleted && (
        <div className="text-green-500 font-bold">Completed!</div>
      )}
      <div className="flex flex-col md:flex-row gap-4 card p-4 border rounded-lg">
        {steps.map((step, index) => (
          <div className="w-full flex items-center" key={index}>
            <div
              className={cn("flex items-center", {
                "opacity-50": index !== activeStep,
              })}
            >
              <div className="flex-shrink-0 rounded-full border-2 bg-[#34D399] w-8 h-8 flex items-center justify-center">
                {index < activeStep ? (
                  <img
                    src={check}
                    alt="Profile"
                    className="w-8 h-6 cursor-pointer filter invert grayscale"
                  />
                ) : (
                  <div
                    className={`flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center ${activeStep ? "bg-black text-white" : "bg-[black] text-[white]"}`}
                  >
                    {index + 1}
                  </div>
                )}
              </div>
              <div className="ml-2 whitespace-nowrap overflow-hidden text-ellipsis">
                <span>{step.title}</span>
              </div>
            </div>
            {index !== steps.length - 1 && (
              <div className="w-[10rem] h-[2px] bg-[#191919]" />
            )}
          </div>
        ))}
      </div>
      <div className="w-full mt-4">
        {submissionCompleted ? (
          <div>
            <div className="mb-4">
              <h3 className="font-bold">{stepperData.personalInfo}</h3>
              <div className="p-2 bg-gray-100 rounded-md">
                <p>Name: {formData[0]?.name}</p>
                <p>Email: {formData[0]?.email}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">{stepperData.addressInfo}</h3>
              <div className="p-2 bg-gray-100 rounded-md">
                <p>Address: {formData[1]?.address}</p>
                <p>City: {formData[1]?.city}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">{stepperData.payMode}</h3>
              <div className="p-2 bg-gray-100 rounded-md">
                <p>Payment Method: {formData[2]?.paymentMethod}</p>
              </div>
            </div>
          </div>
        ) : (
          React.isValidElement(steps[activeStep].component) &&
          React.cloneElement(steps[activeStep].component, {
            onDataChange: handleStepDataChange,
            data: formData[activeStep] || {},
          })
        )}
      </div>
      <div className="w-full flex items-center justify-end card p-4 border rounded-lg">
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
    </div>
  );
});

export default Stepper;
