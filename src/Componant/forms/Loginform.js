import React, { useState } from 'react'
import './Loginform.css'
const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <>
            <form onSubmit={submitForm}>
                <div className='loginpage'>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="email" id="form1Example1" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                            Email address
                        </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form1Example2" className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                        <label className="form-label" htmlFor="form1Example2">
                            Password
                        </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
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
                        Sign in
                    </button>
                </div>
            </form>

        </>
    )
}

export default Loginform