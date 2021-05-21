import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';

const SignupForm = (props) => {
  const [form,setform] = useState();
    // const formik = useFormik({
    //   initialValues: {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //   },
    //   onSubmit: values => {
    //    console.log(values);
    //   },
    // });
    const handleSubmit = (event)=>{
      event.preventDefault();
        console.log(form);
    };
    const handleChange = (event)=>{
        //console.log(event.target.name);
        let name = event.target.name;
        let value = event.target.value;
        console.log({[name]:value});
        setform({...form,[name]:value})
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>:
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={(event)=>handleChange(event)}
        />
        <br/><br/> 
        <label htmlFor="lastName">Last Name</label>:
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={(event)=>handleChange(event)}
        />
        <br/><br/>
        <label htmlFor="email">Email Address</label>:
        <input
          id="email"
          name="email"
          type="email"
          onChange={(event)=>handleChange(event)}
        />
        <br/><br/>
        <button type="submit" style={{margin:"0 auto"}}>Submit</button>
      </form>
    );
  }
  export default SignupForm;