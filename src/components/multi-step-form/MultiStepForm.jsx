import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Step1 from "../step-1/Step1";
import Step2 from "../step-2/Step2";
import Step3 from "../step-3/Step3";
import Step4 from "../step-4/Step4";
const Steps = {
  step1: {
    component: Step1,
    title: "Personal Info",
    subtitle: "Please provide your name, email address, and phone number.",
    hasNextButton: true,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing",
    hasNextButton: true,
    hasBackButton: true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    hasNextButton: true,
    hasBackButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check eveything looks OK before confirming.",
    hasBackButton: true,
  },
};

function MultiStepForm() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });
  const handleStepSubmit = (stepId, nextStepId, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData,
    }); 
    setActiveStep(nextStepId)
  };
  const [activeStep, setActiveStep] = useState("step1");
  const ActiveStep = Steps[activeStep].component;
  const handleBack=()=>{
    const currentStepNumber = Number(activeStep.slice(-1))
    setActiveStep(`step${currentStepNumber -1}`)
  }
  return (
    <div className="flex gap-3 p-3 bg-white min-h-[60vh] min-w-[90vw] rounded-xl shadow-xl">
      <Sidebar activeStep={activeStep} />
      <ActiveStep {...Steps[activeStep]} onStepSubmit={handleStepSubmit} formData={formData} onBack={handleBack}/>
    </div>
  );
}

export default MultiStepForm;
