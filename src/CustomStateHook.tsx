import { useState } from "react";
import "./styles.css";

function useBooleanState(initState = false): [boolean, () => void] {
  const [state, setState] = useState(initState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
}

export default function StateHook() {
  const [isVisible, toggle] = useBooleanState(false);

  return (
    <div className="App">
      <button onClick={() => toggle()}>toggle</button>
      {isVisible && (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, illum?
        </>
      )}
    </div>
  );
}
