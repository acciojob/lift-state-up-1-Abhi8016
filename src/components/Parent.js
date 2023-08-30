import React, { useState } from "react";
import Child from "./Child";
import './Parent.css';
const Parent = () => {

    let[showModal, setShowModal] = useState(false);

    function changeModal(data){
        setShowModal(data);
      }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child changeM={changeModal} modal={showModal}/>
            {/* <h1>{modal}</h1> */}
        </div>
    )
}

export default Parent