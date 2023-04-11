import React from 'react';
import './taskmaintainer.css';
import Taskpage2 from './Taskpage22';
import { useNavigate } from 'react-router-dom';


export default function Taskmaintainer() {
    const navigate = useNavigate()
    function logouthandler() {
        localStorage.removeItem("token");
        let token = localStorage.getItem("token")
        if (!token) {
            navigate('/')
        }
    }


    return (
        <div>

            <nav className="navbar justify-content-between">
                <h4 className="navbar-brand">TASK MAINTAINER</h4>
                <form className="form-inline">
                   
                    <button className="Logout my-3 my-sm-0" onClick={logouthandler}>Logout</button>
                </form>
            </nav>

            <Taskpage2 />
        </div>

    )
}

