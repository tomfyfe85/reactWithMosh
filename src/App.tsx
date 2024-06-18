import { useState } from "react";
function App() {
  const [pizza, setPizza] = useState({ name: "Marg", toppings: ["Cheese"] });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pep"] });
  };
  console.log(pizza);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
