import '../styles/Login.css'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { request, setAuthToken,isTokenExpired } from '../util/Authentication';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';


export default function Login() {
    const [data, setData] = useState({
        login: '',
        password: '',
    });
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault()
        const { login, password } = data;
        request("POST", `/api/auth/authenticate`, { login: login, password: password },{})
            .then((response) => { 
                setAuthToken(response.data.token); 
                console.log(response.data.userId); 
                toast.success('Login successful'); 
                navigate("/") })
            .catch((error)=>{
                toast.error('Wrong credentials!'); 
                console.log(error.response.data);});
    }
    
    return (
        <>  
            <div className="login--container">
                <Navbar />
                <div className="login--bg"></div>
                {isTokenExpired() ?
                    <div className="login--wrapper">
                        <form className="login--form">
                            <p className="login--text">Username</p>
                            <input type="text" className="login--input" id="username" placeholder="Your username" autoComplete="off" name="username"
                                value={data.login} onChange={(e) => setData({ ...data, login: e.target.value })} />
                            <p className="login--text">Password</p>
                            <input type="password" className="login--input" id="password" placeholder="Your password" autoComplete="off" name="password"
                                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                            <button className="login--btn" type="submit" onClick={login}>Log in</button>
                        </form>
                    </div>
                    :
                    <>
                        <div className="login--wrapper">
                            <p className="login--logged-in-text">Already logged in!</p>
                            <button className="login--btn" onClick={() => { setAuthToken("null","null"); navigate("/login") }}>Log out</button>
                        </div>
                    </>
     
                }
            </div>
        </>
    )
}