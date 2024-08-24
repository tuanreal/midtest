import { useState } from "react";
import Explore from "./components/Explore";
import WhatAre from "./components/WhatAre";
import Carousel from "./components/Carousel";
import Latest from "./components/Latest";
import Navabar from "./components/Navabar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="color-bla color-wh items-center divcha">
      <Navabar />
      <Explore />
      <WhatAre />
      <Carousel />
      <Latest />
    </div>
  );
}

export default App;
