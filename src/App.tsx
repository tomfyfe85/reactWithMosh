import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText maxChar={23}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse,
        voluptate facilis ab corrupti atque eveniet deleniti repudiandae placeat
        voluptates neque pariatur exercitationem aliquam fuga libero dolor enim
        temporibus dolores!
      </ExpandableText>
    </div>
  );
}

export default App;
