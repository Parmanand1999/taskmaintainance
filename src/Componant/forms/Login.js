import React, { useState } from 'react'
import './Loginform.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    });
    const [allEntry, setAllEntry] = useState([])
   async function submitForm(e) {
        e.preventDefault();

        setAllEntry([...allEntry, logindata]);
        console.log(allEntry)



    }
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
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block">
                        <Link to='/Taskmaintainer' style={{
                            color: 'white'
                        }}> Login</Link>
                    </button>
                </div>
            </form>

        </>
    )
}

export default Login