import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const clicked = () => {
    onClick();
    setLiked(!liked);
  };

  if (liked) return <IoMdHeart onClick={clicked} color="#FF0000" size={20} />;

  return (
    <div>
      <BsSuitHeart onClick={clicked} color="#000000" size={20} />
    </div>
  );
};

export default Like;
