import React from "react";
import "../../../stylesheets/form.css";

const Register=()=>{
    return (
        <div className="container">
            <form className="form">
                <div>Create Your Account</div>
                <div><label>username</label></div>
                <div>
                <input type="text" placeholder="username" ></input>
                </div>
                <div><label>full name</label></div>
                <div>
                <input type="text" placeholder="full name" ></input>
                </div>
                <div><label>email</label></div>
                <div>
                <input type="email" placeholder="example@example.com" ></input>
                </div>
                <div>
                    <label htmlFor="phone">phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div><lable>password</lable></div>
                <div>
                    <input type="password" placeholder=""></input>
                </div>
                <div><lable>confirm password</lable>
                    <input type="password" placeholder=""></input>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;