import "./App.css";
import {useReducer } from "react"

const initialState = 0;
const reducer = (state,action) => {
  if(action.type === "Increment")
  {
    return state + 1;
  }
  else{
    return state - 1;
  }
  
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
    {state}
    <div>
      <button onClick={() => dispatch({type: "Increment"})}>+</button>
      <button onClick={() => dispatch({type: "Decrement"})}>-</button>
    </div>
  
    </>
  );
}

export default App;
