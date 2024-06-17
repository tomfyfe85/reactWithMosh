import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  // const [alert, setAlert] = useState(false);
  const [cartItems, setCartItems] = useState(['Product1', 'Product2'])
  console.log(cartItems);
  return (
    <>
      <div>
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </>
  );
}

export default App;
0;
