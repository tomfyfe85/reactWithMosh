import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fran", "Toykyo", "London"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  );
}

export default App;
