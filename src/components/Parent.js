import React, { useState } from "react";

const Parent = () => {

    let [modal, setModal] = useState(false);
    
    function changeModal(data){
        setModal(data);
    }

    console.log(modal);
    return(
        <div>modal={changeModal}</div>
    )
}

export default Parent;