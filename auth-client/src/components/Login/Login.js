import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('//localhost:5000/api/signin', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log("signin Response",response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form className='container' onSubmit={loginHandler}>

            <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}

export default Signup