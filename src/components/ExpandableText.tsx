import { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [value, setValue] = useState(false);

  return (
    <div>
      {value ? children : children.slice(0, maxChar)}
      <button onClick={() => setValue(!value)}>
        {value ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
