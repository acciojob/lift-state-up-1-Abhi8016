
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";
const App = () => {

  // let[modal, setModal] = useState("abhi");

  // function changeModal(data){
  //   setModal(data);
  // }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent/>
    </div>
  )
}

export default App
