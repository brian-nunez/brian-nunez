import React, { useReducer } from 'react';
import { WizardContext, useWizardContext } from './context';
import type { WizardContextType } from './context';
import reducer, { initialState } from './reducer';
import Step from './Step';

export function useWizard(): WizardContextType {
  const [state, dispatch] = useReducer(reducer, initialState);

  const next = () => dispatch({ type: 'NEXT' });
  const previous = () => dispatch({ type: 'PREVIOUS' });
  const goto = (step: number) => {
    if (typeof step !== 'number') {
      throw new TypeError('`Wizard` function goto only accepts a number.');
    }
    dispatch({ type: 'GOTO', payload: step })
  };

  const context = {
    ...state,
    next,
    previous,
    goto,
  };

  return context;
}

interface WizardProps {
  children: React.ReactNode;
};

const Wizard: React.FC<WizardProps> = ({ children }) => {
  const wizardBag = useWizard();

  return (
    <WizardContext.Provider value={{ ...wizardBag }}>
      <WizardContext.Consumer>
        {(context: WizardContextType) => (
          React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            if (Step !== child?.type) {
              throw new Error('Wizard children must only contain `Step` components');
            }

            if (context.step !== idx) {
              return null;
            }

            return child;
          })
        )}
      </WizardContext.Consumer>
    </WizardContext.Provider>
  );
}

export default Wizard;
