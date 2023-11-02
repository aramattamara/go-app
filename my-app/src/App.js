import React, {Fragment, useEffect, useState} from "react";
import './App.css';


function App(props) {
    const [isTrue, setIsTrue] = useState(true);
    const [crowd, setCrowd] = useState([]);

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }

    useEffect(() => {
        console.log("use Effect fired")

        let people = [
            {
                id: 1,
                firstName: "Mary",
                lastname: "Brown",
                dob: "1997-06-20",
            },
            {
                id: 2,
                firstName: "John",
                lastname: "King",
                dob: "1993-04-23",
            },
            {
                id: 3,
                firstName: "Jacob",
                lastname: "King1",
                dob: "1993-04-23",
            }
        ]
        setCrowd(people);

    }, []);

    return (
        <>
            <hr/>
            <h1 className="h1-green"> {props.msg}</h1>
            <hr/>
            {isTrue && <Fragment>
                <p>The current value of isTrue is true</p>
                <hr/>
            </Fragment>}
            <hr/>
            {isTrue ? <p>Is true </p> : <p>Is false</p>}
            <hr/>
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is true</a>
            <hr/>
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastname} {m.dob}</li>
                ))}
            </ul>
        </>
    )
}

export default App;
