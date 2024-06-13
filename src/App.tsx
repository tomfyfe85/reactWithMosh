import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alert, setAlert] = useState(null);
  
  const handleClick = () => {
    console.log("clicked");
    setAlert(true);
  };
  console.log(alert)
  return (
    <>
      {alert ?  <Alert>PANIC</Alert> : null}
      <Button type="danger" onClick={handleClick}>
        my button
      </Button>
      
    </>
  );
}

export default App;
function True(prevState: null): null {
  throw new Error("Function not implemented.");
}
