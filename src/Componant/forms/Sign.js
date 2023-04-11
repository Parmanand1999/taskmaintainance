import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
function Signup() {
    const navigat = useNavigate()
    const [signdata, setSignData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
    })
    const [allsigndata, setAllsignData] = useState([]);
    const [firstnameplace, setFirstnameplace] = useState(false);
    const [lastnameplace, setLastnameplace] = useState(false);
    const [emailplace, setEmailplace] = useState(false);
    const [passwordplace, setPasswordplace] = useState(false);
    const [conformpasswordplace, setConfirmpasswordplace] = useState(false);


    function Register() {
        let erro = 0
        if (signdata.firstName.length < 1) {
            setFirstnameplace(true);
            erro++;
        }
        if (signdata.lastName.length < 1) {
            setLastnameplace(true)
            erro++;
        }
        if (signdata.email.length < 1) {
            setEmailplace(true)
            erro++;
        }
        if (signdata.password.length < 1) {
            setPasswordplace(true)
            erro++;
        }
        if (signdata.password !== signdata.confirm_password) {
            setConfirmpasswordplace(true)
            erro++;
        }

        if (erro === 0) {

            fetch('https://todo-api-xu4f.onrender.com/user/register', {
                method: 'POST',
                body: JSON.stringify(signdata),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((result) => setAllsignData(pre => [...pre, result]))
                .catch((error) => { console.log(error) })
            navigat("/")
        }
    }
    console.log(allsigndata)
    return (

        <>

            <form className='signform'>
                <div className="form-outline  mb-1">
                    <h2 className=" text-center mb-1">
                        Create an account
                    </h2>

                    <label className="form-label" htmlFor="form3Example1cg">
                        first Name
                    </label>
                    <input
                        value={signdata.firstName}
                        onChange={(e) => setSignData(pre => ({ ...pre, firstName: e.target.value }))}
                        type="text"
                        placeholder="Enter your first name"
                        id="form3Example1cg"
                        className="form-control form-control-sm "
                    />
                    {firstnameplace ? <span style={{ color: "red" }}>First Name is required<br /></span> : ""}
                    <label className="form-label mb-0" htmlFor="form3Example1cg">
                        Last Name
                    </label>
                    <input
                        value={signdata.lastName
                        }
                        onChange={(e) => setSignData(pre => ({ ...pre, lastName: e.target.value }))}
                        type="text"
                        id="form3Example1cg"
                        placeholder={"Enter your Last name"}
                        className="form-control form-control-sm"
                    />
                    {lastnameplace ? <span style={{ color: "red" }}>First Name is required</span> : ""}
                </div>
                <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                </label>
                <div className="form-outline ">
                    <input
                        value={signdata.email}
                        onChange={(e) => setSignData(pre => ({ ...pre, email: e.target.value }))}
                        type="email"
                        id="form3Example3cg"
                        placeholder={"Enter your email"}
                        className="form-control form-control-sm"
                    />
                    {emailplace ? <span style={{ color: "red" }}>Email is required</span> : ""}
                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example4cg">
                        Password
                    </label>
                    <input
                        value={signdata.password}
                        onChange={(e) => setSignData(pre => ({ ...pre, password: e.target.value }))}
                        type="password"
                        placeholder={"Enter your Password"}
                        id="form3Example4cg"
                        className="form-control form-control-sm "
                    />
                    {passwordplace ? <span style={{ color: "red" }}>Password is required</span> : ""}
                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example4cg">
                        Confirm-Password
                    </label>
                    <input
                        value={signdata.confirm_password}
                        onChange={(e) => setSignData(pre => ({ ...pre, confirm_password: e.target.value }))}
                        type="password"
                        id="form3Example4cg"
                        placeholder=' Confirm-Password'
                        className="form-control form-control-sm "
                    />
                    {conformpasswordplace ? <span style={{ color: "red" }}>confirm_password is Invalid</span> : ""}
                </div>

                <div className="d-flex mt-2 justify-content-center">
                    <button
                        onClick={Register}
                        type="button"
                        className="btn btn-success btn-block  gradient-custom-4 text-body"
                    >
                        Register
                    </button>
                </div>
                <p className="text-center text-muted mt-1 mb-0">
                    Have already an account?{" "}
                    <Link to="/" className="fw-bold text-body">
                        <u>Login here</u>
                    </Link>
                </p>
            </form>
        </>

    )
}

export default Signup;