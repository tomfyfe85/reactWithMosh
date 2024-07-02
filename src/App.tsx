import { useEffect, useRef, useState } from "react";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
function App() {
  const ref = useRef<HTMLInputElement>(null);
  
  // afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
