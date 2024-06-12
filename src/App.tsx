import Alert from "./components/Alert";
function App() {
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];
  const onSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Alert>
        Hello <span><h1>WORLD</h1></span>
      </Alert>
    </>
  );
}

export default App;
