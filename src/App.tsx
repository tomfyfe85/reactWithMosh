import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];
  const onSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectedItem={onSelectedItem}/>
    </div>
  );
}

export default App;
