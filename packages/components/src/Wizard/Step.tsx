import React, { useContext } from 'react';
import { useWizardContext } from './context';

interface RenderProps {
  next: () => void;
  previous: () => void;
  goto: (index: number) => void;
  step: number,
}

interface StepProps {
  children?: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  onGoto?: (index: number) => void;
  render?: (props: RenderProps) => React.ReactNode;
}

const Step: React.FC<StepProps> = ({
  children,
  render,
  onNext,
  onPrevious,
  onGoto,
}) => {
  const { next, previous, goto, step } = useWizardContext();

  if (!children && !render) {
    throw new Error('`Step` has no children or render provided.');
  }

  const handleNext = async () => {
    if (typeof onNext === 'function') {
      await onNext();
    }
    next();
  };

  const handlePrevious = async () => {
    if (typeof onPrevious === 'function') {
      await onPrevious();
    }
    previous();
  };

  const handleGoto = async (number: number) => {
    if (typeof onGoto === 'function') {
      await onGoto(number);
    }
    goto(number);
  };

  const props: RenderProps = {
    next: handleNext,
    previous: handlePrevious,
    goto: handleGoto,
    step,
  };

  if (typeof render === 'function') {
    return render(props);
  }

  if (typeof children === 'function') {
    return children(props);
  }

  return null;
}

export default Step;
