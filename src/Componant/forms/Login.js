import React, { useState } from 'react'
import './Loginform.css'
import { Link,useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    });
    const [allEntry, setAllEntry] = useState([])
    function submitForm(e) {
        e.preventDefault();
        fetch('https://todo-api-xu4f.onrender.com/user/login', {
            method: 'POST',
            body: JSON.stringify(logindata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                setAllEntry(pre => [...pre, result])
                localStorage.setItem("token", result.access_token)
                if (localStorage.getItem("token")) {
                    navigate('/Taskmaintainer')
                }
            
            })

            .catch((error) => {
                console.log(error)
            })

    }

    console.log(allEntry, "..................allentry")

    return (
        <>
            <form onSubmit={submitForm}>
                <div className='loginpage'>
                    <h2 className=" text-center mb-2">
                        Login
                    </h2>
                    {/* Email input */}
                    <div className="form-outline mb-2">
                        <input type="email" id="form1Example1" className="form-control"
                            value={logindata.email}
                            onChange={(e) => setLogindata(pre => ({ ...pre, email: e.target.value }))}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                            Email address
                        </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-2">
                        <input type="password" id="form1Example2" className="form-control"
                            onChange={(e) => setLogindata(pre => ({ ...pre, password: e.target.value }))}
                            value={logindata.password} />
                        <label className="form-label" htmlFor="form1Example2">
                            Password
                        </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-2">
                        <div className="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="form1Example3"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="form1Example3">
                                    {" "}
                                    Remember me{" "}
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            {/* Simple link */}
                            <Link to="/Signup">Signup</Link>
                        </div>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>
                </div>
            </form>

        </>
    )
}

export default Login