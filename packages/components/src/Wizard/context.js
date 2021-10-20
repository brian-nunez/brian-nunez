import React, { createContext, useReducer, useContext } from 'react';

export const WizardContext = createContext({});

export function useWizardContext() {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('Wizard context is undefined, make sure component is within the wizard component');
  }

  return context;
}
