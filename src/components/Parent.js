import React, { useState } from "react";
import Child from "./Child";
import './Parent.css';
const Parent = () => {

    let[modal, setModal] = useState(false);

    function changeModal(data){
        setModal(data);
      }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child changeM={changeModal} modal={modal}/>
            {/* <h1>{modal}</h1> */}
        </div>
    )
}

export default Parent