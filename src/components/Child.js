import React, { useState } from "react";

const Child = ({modal}) => {

    let [click, setClick] = useState(true);

    function handleClick(){
        modal(setClick);
    }

    return(
        <div><button onSubmit={handleClick}></button></div>
    )
}

export default Child;