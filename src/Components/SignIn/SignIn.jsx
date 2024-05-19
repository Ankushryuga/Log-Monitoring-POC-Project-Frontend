// import '../../../stylesheets/style.css';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Signin=(props)=>{
//     const navigate=useNavigate();
//     console.log(props);
//     return (
//         <>
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'> SIGN IN </div>
//                 <div className='underline'></div>
//             </div>
//             <div className='inputs'>
//                 <input type='text' placeholder='Please enter username or email'></input>
//             </div>
//             <div className='inputs'>
//                 <input type='password' placeholder='Please enter password'></input>
//             </div>
//             <Link to="/forgotpassword">Forgot Password?</Link>
//             <div>
//             <button type='submit'>Signin</button>
//             </div>
//         </div>
//         </>
//     );
// };


// export default Signin;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios using npm or yarn

const Signin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                console.log("Position: ", latitude, longitude);
                // Send the username, password, and location to the server
                try {
                    const response = await axios.post('http://192.168.108.131:8787/login', {
                        username,
                        password,
                        latitude,
                        longitude
                    });
                    // console.log(response.data);
                    if (response.data.status === 1) {
                        navigate('/dashboard'); // Redirect to dashboard on successful login
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                }
            }, (error) => {
                console.error('Error obtaining location:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'> SIGN IN </div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <input
                        type='text'
                        placeholder='Please enter username or email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='inputs'>
                    <input
                        type='password'
                        placeholder='Please enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to="/forgotpassword">Forgot Password?</Link>
                <div>
                    <button type='button' onClick={handleSignIn}>Signin</button>
                </div>
            </div>
        </>
    );
};

export default Signin;
