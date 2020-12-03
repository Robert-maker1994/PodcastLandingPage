import React, { useState } from 'react';
import './App.css';
/*Background Picture*/
import background from './background.jpg';
/* React Forms*/
import { useForm } from 'react-hook-form';
/* Material Ui */
import {  Button,TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
/* Soical Media Buttons*/
import Buttons from './Buttons/Buttons';
import Success from './Success';
import { Link } from 'react-router-dom';



export const Home = () => {
     /* State*/
  const [email, setEmail] = useState();
  const [FName, setFName] = useState();
  const [LName, setLName] = useState();
  const [login,setLogin] = useState(true);
 
/* Form Controller*/
  const { register, errors, handleSubmit } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'all',
		defaultValues: {
			email: '',
      FName: '',
      LName: ''
		},
  });
      /*HTTP Request */
const onSubmit = async  (data, success) => {  
    try {
         data.email = email;
         data.firstName = LName
         data.lastName = FName
         const response = await fetch('http://localhost:5000/lists', {
           method: 'post',
             headers: {
               "Content-Type": "application/json",
               "Access-Control-Allow-Origin" : "http://localhost:5000/" },
               body: JSON.stringify({ 
             status: "subscribed",
             email: data.email,
             firstName: data.firstName,
             lastName: data.lastName
               })
         }).then(res => res.json())
    //     .then(res => {   res.redirect(301, Success)})
         .catch((err) => console.log(err))
         if (response === true) {
           setLogin(true)
         }
       }catch(err) {
         console.loh(err)
           } 
       } 
   
   
    
    
    return (
        <div>
            
      <img src={background} alt="#" />
      <div className="headings center">
      <h2>The Curious Thinkers<br /> Podcast. </h2> 
      <h3>Sign Up to our <br /> newsletter! </h3>
</div>
      <div className="container center">
          <form method='post' onSubmit={handleSubmit(onSubmit)} >
          <div className="inputContainer">
                {/*First Name */}
              <TextField 
              name='FName'
              label="First Name"
              onChange={(e) => setFName( e.target.value)}
              />
            </div>
            <div className="inputContainer">
                {/*Second Name*/}
            <TextField 
              name='LName' 
              label="Second Name"
              type="text"
              onChange={(e) => setLName( e.target.value)}
              />
             </div>  
             <div  className="inputContainer">
              {/*Email */}
               <TextField
              name='email'
              text="address"
              type="email"
              label="Email"
              onChange={(e) => setEmail( e.target.value)}
              inputRef={register({
              required: 'Required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						})}
            errors={errors.email}
              />
              {errors.email && (
						<Alert severity='error'>{errors.email.message}</Alert>
					)}
              </div>
						<Button
							type='submit'
							onClick={onSubmit}
						><Link to='/success'>Sign up</Link>
                  

						</Button>
          </form>
          <div className="SoicalButtons">
          <Buttons  className='center'  />
          </div>
        </div>
        </div>
    )
}
