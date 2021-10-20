import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';
import Step from './Step';

const WizardContext = createContext({});

export function useWizardContext() {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('Wizard context is undefined, make sure component is within the wizard component');
  }

  return context;
}

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
