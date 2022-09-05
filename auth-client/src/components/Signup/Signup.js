import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.post('//localhost:5000/api/signup', {
            firstName: firstName,
            lastName: lastName, 
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className="mb-3 ">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" value={firstName} required onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" value={lastName} required onChange={(e)=>setLastName(e.target.value)}  />
            </div>
            <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} required onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} required  onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup