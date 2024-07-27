import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Join() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        // Save the user's email and password to local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        navigate('/login');
    }

    return (
        <>
            
            <div id="registerdiv">
                <h1>Pixabay</h1>
                <form onSubmit={handleRegister}>
                    <h1>Please Registration here </h1><br /><br /><br />
                    <input 
                        type="email" placeholder="Enter your email"  value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    /><br /><br />
                    <input 
                        type="password" placeholder="Enter your password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    /><br /><br />
                    <input type="submit" value="Register"  style={{fontSize:"20px",backgroundColor:"rgb(110, 155, 237,0.26)",borderRadius:"10px"}}/><br /><br/>
                </form>
            </div>
        </>
    );
}

export default Join;