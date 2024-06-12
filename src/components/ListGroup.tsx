import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No List items</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
