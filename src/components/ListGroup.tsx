import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No List items</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              index === i ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setIndex(i);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
