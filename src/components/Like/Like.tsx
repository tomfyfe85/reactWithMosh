import React, { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const clicked = () => {
    onClick();
    setLiked(!liked);
  };

  return (
    <div>
      <BsSuitHeart onClick={clicked} className={liked ? styles.liked : ""} />
    </div>
  );
};

export default Like;
