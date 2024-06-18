import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [value, setValue] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;
  const text = value ? children : children.substring(0, maxChar) + "...";
  console.log(children.length);
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setValue(!value)}>
        {value ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
