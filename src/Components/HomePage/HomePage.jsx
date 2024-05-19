import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../../stylesheets/form.css'

const HomePage=()=>{
    return (
        <div className="container">
        <form>
            <div>Sign in to your account</div>
            <div><label>username</label></div>
            <div>
                <input type="text" placeholder="username" ></input>
            </div>
            <div><label>password</label></div>
            <div>
                <input type="password" placeholder="password" ></input>
            </div>
            {/* <div><label>username</label></div> */}
            <div className="remember-me-container">
                <input type="checkbox" id="rememberMe"></input>
                <label htmlFor="rememberMe">Remember me</label>  
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <button type="submit">Sign in</button>
            <div>
                <label>Don't have an account?
                    <Link to="/signup"> Sign up</Link>
                </label>
            </div>
        </form>
        </div>
    );
};

export default HomePage;