/* eslint-disable react/no-array-index-key */
import React, { useCallback, useMemo, useState } from 'react';

export type StepType = {
  type: React.FC<{
    goTo: (index: number) => void;
    next: () => void;
    back: () => void;
    currentStepIndex: number;
    [key: string]: any;
  }>;
  props: Record<string, any>;
};

export interface MultiStepFormProps {
  currentStepIndex?: number;
  step?: React.ReactElement;
  steps?: React.ReactElement[];
  isFirstStep?: boolean;
  isLastStep?: boolean;
  goTo?: (index: number) => void;
  next?: () => void;
  back?: () => void;
}

const useMultistepForm = (
  steps: StepType[],
  globalProps = {} as Record<string, any>,
): MultiStepFormProps => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }, [steps.length]);

  const back = useCallback(() => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentStepIndex(index);
  }, []);

  const enhancedSteps = useMemo(() => {
    return steps.map((step, index) => (
      <step.type
        {...{ ...step.props, ...globalProps }}
        goTo={goTo}
        next={next}
        back={back}
        key={index}
        currentStepIndex={currentStepIndex}
      />
    ));
  }, [globalProps, steps, currentStepIndex, goTo, next, back]);

  return {
    currentStepIndex,
    step: enhancedSteps[currentStepIndex],
    steps: enhancedSteps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;
