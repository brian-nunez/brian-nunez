import React, { useReducer } from 'react';
import { WizardContext, useWizardContext } from './context';
import reducer, { initialState } from './reducer';
import Step from './Step';

export function useWizard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const next = () => dispatch({ type: 'NEXT' });
  const previous = () => dispatch({ type: 'PREVIOUS' });
  const goto = (step) => {
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

function Wizard({ children }) {
  const wizardBag = useWizard();

  return (
    <WizardContext.Provider value={{ ...wizardBag }}>
      <WizardContext.Consumer>
        {context => (
          React.Children.map(children, (child, idx) => {
            if (![Step].includes(child.type)) {
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
