import { useState } from "react";
import "./App.css";
import MainCont from "./comp/MainCont";

import reviews from "./data";

function App() {

  return (
<div className="h-[100vh] w-[100wh] bg-gray-200 ">
  <MainCont  reviews={reviews}/>
</div>
    );
}

export default App;
