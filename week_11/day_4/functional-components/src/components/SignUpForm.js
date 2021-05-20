import React, { useState } from 'react';
import { SignUpButton, SignUpFormInput, SignUpFormDiv } from './styledComponents/SignUpFormStyles';

const SignUpForm = (props) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput 
        onChange={(e) => props.setFirstName(e.target.value)} 
        type="text" 
        value={props.firstName}
        placeholder="First Name"
        />
        <SignUpFormInput type="text" placeholder="Last Name"/>
        <SignUpFormInput type="text" placeholder="Email"/>
        <SignUpFormInput type="text" placeholder="Password"/>
        <SignUpFormInput type="text" placeholder="Re-Type Password"/>
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpFormDiv>
  </div>
  );
};
export default SignUpForm;
