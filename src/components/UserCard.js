import React, { useState } from 'react'



const UserCard = () => {
  
const [first_name, setFirstName] = useState("");
const [last_name, setLastName] = useState("");
const [user_name, setUserName] = useState("");
const [email, setEmail] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
const user = {first_name, last_name, user_name, email};

//     const postData = () => {
//       console.log(user);

// CREATE
fetch('http://127.0.0.1:3000/users', {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user posted');
            
            
           
        })

    }
    return (

  <form onSubmit={ handleSubmit } className="cmdUser-form">
  
      <label className='form-label'>First Name</label>
      <input type="text"
      placeholder='Type First Name Here'
      required 
      value={ first_name }
      onChange={(e) => setFirstName(e.target.value)} />
    
    
      <label className="form-label">Last Name</label>
      <input type="text"
      placeholder='Type Last Name Here' 
      value={ last_name }
      onChange={(e) => setLastName(e.target.value)} />

     <label className="form-label">User Name</label>
      <input type="text"
      placeholder='Creat a User Name' 
      value={ user_name }
      onChange={(e) => setUserName(e.target.value)} />

     <label className="form-label">Email Address</label>
      <input type="text"
      placeholder='Type your email address' 
      value={ email }
      onChange={(e) => setEmail(e.target.value)} />
  
    
  <button>Submit</button>
  
  </form>
);
    }
  

export default UserCard;