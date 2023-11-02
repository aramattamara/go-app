import React, {Fragment, useState} from "react";
import './Hello.css';


function Hello(props) {
    const [isTrue, setIsTrue] = useState(false)

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }

    return (
        <>
            <hr />
            <h1 className="h1-green"> {props.msg}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr/>
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is true</a>
        </>
    )
}

export default Hello;
