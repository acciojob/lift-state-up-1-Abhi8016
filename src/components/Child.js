import React, { useState } from "react";
import './Child.css';
const Child = ({ changeM, modal }) => {

    let [n, setN] = useState(true);

    function handel() {
        changeM(n);
    }
    // setN(false);
    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={handel}>Show Modal</button>
            {modal ? <><h3>Modal Content</h3>
                <p>This is the modal content</p>  </>
                : null}
        </div>
    )
}

export default Child;