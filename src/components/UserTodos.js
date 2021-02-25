import React, {useState, useEffect} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getTodosByUser, getUserByID} from "../request/Request";


function ShowUser() {

    const [Todos, setTodos] = useState([])
    const [User, setUser] = useState({})

    let { id: userID } = useParams();


    useEffect(() => {
        getUserByID(userID).then((data) => {
            setUser(data);
        })
        getTodosByUser(userID).then((data) => {
            setTodos(data);
        })
    }, [userID])



    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto"> {User.name}'s Todos </Navbar.Brand>
            </Navbar>


            {
                Todos.map((Todos, idx) => (
                    <div key={idx} className="userCard">
                        {Todos.title}
                    </div>
                ))
            }
        </div>
    )
}

export default ShowUser;