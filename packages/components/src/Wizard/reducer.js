export const initialState = {
  step: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
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
        step: payload,
      };
    default:
      throw new Error(`Action ${action.type} does not exist`);
  }
}

export default reducer;
