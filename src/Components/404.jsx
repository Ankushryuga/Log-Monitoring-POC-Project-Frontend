import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage=()=>{
    return (
        <>
            <div>
                <h3>404 Page</h3>
            </div>
            <Link to='/'> Go Home</Link>
        </>
    );
};

export default NotFoundPage;