"use client";
import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

export default function Page() {
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const goToPreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  let StepComponent;
  switch (step) {
    case 1:
      StepComponent = Step1;
      break;
    case 2:
      StepComponent = Step2;
      break;
    case 3:
      StepComponent = Step3;
      break;
    case 4:
      StepComponent = Step4;
      break;
    case 5:
      StepComponent = Step5;
      break;
    default:
      StepComponent = Step1;
  }

  return (
    <div>
      <StepComponent />
      {step > 1 && (
        <button onClick={goToPreviousStep}>前へ</button>
      )}
      {step < 5 && (
        <button className='text-white bg-[#000000] rounded-full text-md px-8 py-2 my-3' onClick={goToNextStep}>次へ</button>
      )}
    </div>
  );
}