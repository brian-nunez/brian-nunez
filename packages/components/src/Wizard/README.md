# Wizard Components

Combined the Wizard components allow for an easy multi-step process.
All components include `<Wizard />` and `<Step />`.
## Usage

Both components can be imported like below.
```javascript
import { Wizard, Step } from '@brian-nunez/components';
```

### Wizard Component
Main component is the `<Wizard />`.
This component creates the context and manages all state, such as, the current step and helper functions.
```javascript
<Wizard>
  {...}
</Wizard>
```

### Step Component
The helper component is `<Step />`.
Accepted props are `onNext`, `onPrevious`, and `onGoto`.
This component provides the functionally to switch between steps.
The data that is exposed are `next`, `previous`, `goto`, and `step` (explained below).

```javascript
<Wizard>
  <Step>...</Step>
  <Step
    onNext={...}
    onPrevious={...}
    onGoto={...}
  >
    {({
      next,
      previous,
      goto,
      step,
    }) => (
      ...
    )}
  </Step>
  <Step>...</Step>
  <Step>...</Step>
  <Step>...</Step>
  <Step>...</Step>
</Wizard>
```

#### Step Props

`onNext` - Runs when next is called from within the current step
```javascript
<Step
  onNext={() => {...}}
>
</Step>
```

`onPrevious` - Runs when previous is called from within the current step
```javascript
<Step
  onPrevious={() => {...}}
>
</Step>
```

`onGoto` - Runs when goto is called from within the current step
```javascript
<Step
  onGoto={(gotoStep) => {...}}
>
</Step>
```

#### Step Helper Functions

`next` - Use to advance to the next step
```javascript
<Step>
  {({ next }) => <button onClick={next}>Next</button>}
</Step>
```

`previous` - Use to go back to the previous step
```javascript
<Step>
  {({ previous }) => <button onClick={previous}>Previous</button>}
</Step>
```

`goto` - Use to go to a specific step
```javascript
<Step>
  {({ goto }) => <button onClick={() => goto(2)}>Go to step 3</button>}
</Step>
```

`step` - Current step wizard is on (starting from 0)
```javascript
<Step>
  {({ step }) => <h1>Step {step+1}</h1>}
</Step>
```
## Author

- [@brian-nunez](https://www.github.com/brian-nunez)
