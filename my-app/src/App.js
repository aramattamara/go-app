import React, {Fragment, useEffect, useRef, useState} from "react";
import './App.css';
import Input from "./Input";


function App(props) {
    const [isTrue, setIsTrue] = useState(true);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    //refs
    const firstNameRef = useRef(null);
    const lastNameRef =useRef(null);
    const dobRef =useRef(null);


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
                lastName: "Brown",
                dob: "1997-06-20",
            },
            {
                id: 2,
                firstName: "John",
                lastName: "King",
                dob: "1993-04-23",
            },
            {
                id: 3,
                firstName: "Jacob",
                lastName: "Clear",
                dob: "1993-04-23",
            }
        ]
        setCrowd(people);

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (lastName !== ""){
            addPerson(firstName, lastName, dob)
        }

    }

    const addPerson = (newFirst, newLast, newDob) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDob,
        }

        const newList = crowd.concat(newPerson);

        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowd(sorted);
        setFirstName("");
        setLastName("");
        setDob("");

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";


    }

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

                <form autoComplete="off" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <Input
                            title="First Name"
                            type="text"
                            name="first-name"
                            id="first-name"
                            ref={firstNameRef}
                            autoComplete="first-name-new"
                            className="form-control"
                            onChange={(event) => setFirstName(event.target.value)}
                        ></Input>

                        <Input
                            title="Last Name"
                            type="text"
                            name="last-name"
                            id="last-name"
                            ref={lastNameRef}
                            autoComplete="last-name-new"
                            className="form-control"
                            onChange={(event) => setLastName(event.target.value)}
                        ></Input>

                        <Input
                            title="Date of Birth"
                            type="date"
                            name="dob"
                            id="dob"
                            ref={dobRef}
                            autoComplete="dob-new"
                            className="form-control"
                            onChange={(event) => setDob(event.target.value)}
                        ></Input>
                    </div>


                    <input  type="submit" value="Submit" className="btn btn-primary"/>

                </form>

            <div>
                First Name: {firstName} <br/>
                Last Name: {lastName} <br/>
                DOB: {dob} <br/>
            </div>

            <hr/>
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName} {m.dob}</li>
                ))}
            </ul>
        </>
    )
}

export default App;
