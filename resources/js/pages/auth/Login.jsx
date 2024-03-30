import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     try{
    //         const csrf = await axios.get('/sanctum/csrf-cookie');
    //         const response = await axios.post('/login', {email, password});
    //         setError('')
    //         navigate('/')
    //     }catch(err){
    //         if (err.response && err.response.data) {
    //             setError(err.response.data.error);
    //         } else {
    //             setError('An unexpected error occurred. Please try again.');
    //         }
    //     }

    // }

    // const handleLogout = async () => {

    //     const logout = await axios.post('/logout')

    //     console.log(logout)

    // }

    return (
        <div>
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default Login