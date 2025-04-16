import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
    </div>
  );
};

export default Counter;
