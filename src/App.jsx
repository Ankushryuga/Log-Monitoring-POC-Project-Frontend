import { useState } from 'react';
// import HomePage from './Components/HomePage';
// import '../stylesheets/style.css';
// import HomePage from './Components/HomePage';
import React from 'react';
import Signin from './Components/SignIn/SignIn';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './Components/404';
import { Navigate } from 'react-router-dom';
import Register from './Components/register/register';
import HomePage from './Components/HomePage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './defaultLayouts/Sidebar';
const App= ()=>{
    const [isClicked,setIsClicked]=useState(false);
//   return <RouterProvider router={router} />
        return (
            <Routes>
                <Route exact path='/' element={<HomePage />}></Route>
                {/* <Route path='/signin' element={ */}
                    {/* // isClicked?<Signin isClicked={isClicked}/>:<Navigate replace to={"/"}/> */}
                {/* } */}
                {/* /> */}
                <Route exact path='/dashboard' element={<Dashboard />}></Route>
                <Route exact path='/signin' element={<Signin />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route path='/navbar' element={<Sidebar />}></Route>
                <Route exact path='*' element={<NotFoundPage />}></Route>
            </Routes>
        )
}  
export default App
