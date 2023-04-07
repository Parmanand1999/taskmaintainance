import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Signup.css'
function Signup() {
    const [signdata, setSignData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [allsigndata, setAllsignData] = useState([]);
    function Register() {
        // setAllsignData(pre => [...pre, signdata])

        fetch('https://todo-api-xu4f.onrender.com/user/register', {
            method: 'POST',
            body: JSON.stringify(signdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((result) => setAllsignData(pre => [...pre, result]));
        //  .catch ((error) => console.log( error ,"cant't fetch data"))
    }
    console.log(allsigndata)
    return (

        <>

            <form className='signform'>
                <div className="form-outline  mb-1">
                    <h2 className=" text-center mb-1">
                        Create an account
                    </h2>
                    {/* <input
                        value={signdata.username
                        }
                        onChange={(e) => setSignData(pre => ({ ...pre, username: e.target.value }))}
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-sm"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                        User Name
                    </label> */}
                    <input
                        value={signdata.firstName
                        }
                        onChange={(e) => setSignData(pre => ({ ...pre, firstName: e.target.value }))}
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-sm "
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                        first Name
                    </label>
                    <input
                        value={signdata.lastName
                        }
                        onChange={(e) => setSignData(pre => ({ ...pre, lastName: e.target.value }))}
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-sm"
                    />
                    <label className="form-label mb-0" htmlFor="form3Example1cg">
                        Last Name
                    </label>
                </div>
                <div className="form-outline ">
                    <input
                        value={signdata.email}
                        onChange={(e) => setSignData(pre => ({ ...pre, email: e.target.value }))}
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-sm"
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                    </label>
                </div>
                <div className="form-outline">
                    <input
                        value={signdata.password}
                        onChange={(e) => setSignData(pre => ({ ...pre, password: e.target.value }))}
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-sm "
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                        Password
                    </label>
                </div>
                <div className="form-outline">
                    <input
                        value={signdata.confirm_password}
                        onChange={(e) => setSignData(pre => ({ ...pre, confirm_password: e.target.value }))}
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-sm "
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                        Confirm-Password
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-1 ">
                    <input
                        style={{ marginRight: '89%' }}
                        className="form-check-input d-flex"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3cg"
                    />
                    <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                            <u>Terms of service</u>
                        </a>
                    </label>
                </div>
                <div className="d-flex justify-content-center">
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