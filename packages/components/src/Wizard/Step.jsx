import React, { useContext } from 'react';
import { useWizardContext } from './context';

function Step({
  children,
  render,
  onNext,
  onPrevious,
  onGoto,
}) {
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

  const handleGoto = async (number) => {
    if (typeof onGoto === 'function') {
      await onGoto(number);
    }
    goto(number);
  };

  const props = {
    next: handleNext,
    previous: handlePrevious,
    goto: handleGoto,
    step,
  };

  if (typeof render === 'function') {
    return render(props);
  }

  return children(props);
}

export default Step;
