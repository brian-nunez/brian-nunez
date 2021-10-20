import * as React from 'react';
import { Wizard, Step } from '../../packages/components/src/Wizard';

const {
  useState,
} = React;

export default {
  title: '@echon/components/Wizard',
  component: Wizard,
  args: {},
  argTypes: {
    children: { control: { type: 'text' } },
  },
};

const Template = (args) => {
  const [stepHistory, setStepHistory] = useState([]);
  const add = payload => setStepHistory([...stepHistory, payload]);

  return (
    <React.Fragment>
      <Wizard>
        <Step
          onNext={() => add('Ran `onNext` on Step 1')}
          onPrevious={() => add('Ran `onPrevious` on Step 1')}
          onGoto={(num) => add(`Ran 'onGoto(${num})' on Step 1`)}
        >
          {({ next, goto }) => (
            <div>
              <h1>Step 1</h1>
              <button type="button" onClick={() => goto(2)}>Go to the End</button>
              <button type="button" onClick={next}>Next</button>
            </div>
          )}
        </Step>
        <Step
          onNext={() => add('Ran `onNext` on Step 2')}
          onPrevious={() => add('Ran `onPrevious` on Step 2')}
        >
          {({ next, previous, goto }) => (
            <div>
              <h1>Step 2</h1>
              <button type="button" onClick={previous}>Previous</button>
              <button type="button" onClick={next}>Next</button>
            </div>
          )}
        </Step>
        <Step
          onNext={() => add('Ran `onNext` on Step 3')}
          onPrevious={() => add('Ran `onPrevious` on Step 3')}
          onGoto={(num) => add(`Ran 'onGoto(${num})' on Step 3`)}
        >
          {({ previous, goto }) => (
            <div>
              <h1>Step 3</h1>
              <button type="button" onClick={() => goto(0)}>Go to Start</button>
              <button type="button" onClick={previous}>Previous</button>
            </div>
          )}
        </Step>
      </Wizard>
      <div >
        <h3>Step History</h3>
        <ul>
          {stepHistory.map(step => <li>{step}</li>)}
        </ul>
      </div>
    </React.Fragment>
  );
}

export const wizard = Template.bind({});
wizard.args = {};
