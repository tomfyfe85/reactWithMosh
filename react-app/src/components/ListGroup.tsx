import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fran", "Toykyo", "London"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Not item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-boot-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
