import React from 'react';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import { Link, Route, Routes } from 'react-router-dom';

export default function Next() {
    return (
        <div className='text-white'>
            <h1 className="text-3xl text-primary">
                Home Page
            </h1>
            <Link to="/login">Login</Link> <br></br><br></br>
            <Link to="/signup">Signup</Link>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}
