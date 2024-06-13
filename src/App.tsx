import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert ? <Alert onClose={() => setAlert(false)}>PANIC</Alert> : null}
      <Button type="danger" onClick={() => setAlert(true)}>
        my button
      </Button>
    </>
  );
}

export default App;
function True(prevState: null): null {
  throw new Error("Function not implemented.");
}
