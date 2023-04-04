import React from 'react';
import './taskmaintainer.css';
import Taskpage2 from './Taskpage22';


export default function Taskmaintainer() {
    return (
        <div>

            <nav className="navbar justify-content-between">
                <h4 className="navbar-brand">TASK MAINTAINER</h4>
                <form className="form-inline">
                    <h4 className='mx-3'>Hi Ram</h4>
                    <button className="Logout my-3 my-sm-0">Logout</button>
                </form>
            </nav>

            <Taskpage2 />
        </div>

    )
}

