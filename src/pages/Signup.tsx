import React from "react";
import { useMemo, useState } from "react";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

const TOTAL_STEPS = 3;

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    goal: "",
    newsletter: false,
  });

  const isLastStep = currentStep === TOTAL_STEPS;
  const isFirstStep = currentStep === 1;

  const StepComponent = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTwo formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepThree formData={formData} />;
      default:
        return null;
    }
  }, [currentStep, formData]);

  const handleNext = () => {
    // later: add validation per step
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = () => {
    // later: API call / success screen
    alert("Submitted! ✅ Check console for data.");
    console.log("Submitted data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <p className="text-sm text-gray-500">
            Step {currentStep} of {TOTAL_STEPS}
          </p>
          <h1 className="text-2xl font-bold">Let’s get you set up</h1>
        </div>

        {/* Step content */}
        {StepComponent}

        {/* Buttons */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <button
            onClick={handleBack}
            disabled={isFirstStep}
            className="rounded-lg px-4 py-2 text-sm font-medium border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Back
          </button>

          {!isLastStep ? (
            <button
              onClick={handleNext}
              className="rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:opacity-90"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:opacity-90"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
