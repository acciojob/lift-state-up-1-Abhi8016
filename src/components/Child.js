import React, { useState } from "react";
import './Child.css';
const Child = ({ changeM, modal}) => {

    let [n, setN] = useState(true);

    function handel(e) {
        e.preventDefault();
        changeM(n);
    }
    // setN(false);
    return (
        <div className="child">
            <h3>Child Component</h3>
            <button onClick={handel}>Show Modal</button>
            {modal ? <><div>Modal Contain</div>
                <p>This is Content</p>  </>
                : null}
        </div>
    )
}

export default Child;