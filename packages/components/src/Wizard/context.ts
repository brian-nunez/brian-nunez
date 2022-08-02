import { createContext, useContext } from 'react';

export interface WizardContextType {
  step: number;
  next: () => void;
  previous: () => void;
  goto: (step: number) => void;
};

export const WizardContext = createContext<WizardContextType>({
  step: 0,
  next: () => { },
  previous: () => { },
  goto: (step: number) => { },
});

export function useWizardContext() {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('Wizard context is undefined, make sure component is within the wizard component');
  }

  return context;
}
