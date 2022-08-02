export const initialState = {
  step: 0,
};

type Action = { type: 'NEXT' } | { type: 'PREVIOUS' } | { type: 'GOTO', payload: number };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'PREVIOUS':
      return {
        ...state,
        step: Math.max(state.step - 1, initialState.step),
      };
    case 'GOTO':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
