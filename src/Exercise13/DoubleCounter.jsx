import { useReducer } from "react";

const initialState = { countA: 0, countB: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 }
    case "decrementA":
      return { ...state, countA: state.countA - 1 }
    case "incrementB":
      return { ...state, countB: state.countB + 1 }
    case "decrementB":
      return { ...state, countB: state.countB - 1 }
    case "resetBoth":
      return initialState
    default:
      return state;
  }
}

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.countA}</h2>
      <button onClick={() => dispatch({ type: "incrementA" })}>Increment +</button>
      <button onClick={() => dispatch({ type: "decrementA" })}>Decrement -</button>

      <h2>Counter B: {state.countB}</h2>
      <button onClick={() => dispatch({ type: "incrementB" })}>Increment +</button>
      <button onClick={() => dispatch({ type: "decrementB" })}>Decrement -</button>

      <button onClick={() => dispatch({ type: "resetBoth" })}>Reset Both</button>
    </div>
  )

}

export default DoubleCounter;