import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            const csrf = await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/api/login', {email, password});
            setError('')
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: 'LOGIN', payload: response.data});
            navigate('/')
            console.log(response)

        }catch(err){
            if (err.response && err.response.data) {
                setError(err.response.data.error);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }

    }

    return (
        // <div>
        //   <h2>Login</h2>
        //   {error && <p>{error}</p>}
        //   <form onSubmit={handleSubmit}>
        //     <div>
        //       <label>Email:</label>
        //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //     </div>
        //     <div>
        //       <label>Password:</label>
        //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     </div>

        //     <button type="submit">Login</button>
        //   </form>
        // </div>
        <div className='container d-flex justify-content-center mt-5 pt-5 w-100'>
           {/* <div className='row'>
             <div className="col"> */}
              <form className='w-75 shadow-lg p-3 mb-5 bg-white rounded' onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary float-right">
                  Submit
                </button>
                {error && <p className='text-danger'>{error}</p>}
              </div>
            </form>
            {/* </div>
           </div> */}
        </div>
      );
}

export default Login