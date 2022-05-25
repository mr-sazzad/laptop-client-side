import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../Hooks/hooks';
import { auth } from '../Firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passRef = useRef('');
  const nameRef = useRef('');
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  const [
    createUserWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});

  

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // const email = emailRef.current.value; 
    const password = e.target.password.value;
    // const password = passRef.current.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
      sendEmailVerification();
      toast("Verification Email Sent !");
    } else {
      toast("Password Not Match");
    }
  }
  
  if (token) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
    <h2 className="text-3xl mt-10 mb-5 text-green-400">Register Form</h2>

    <form className="register-form" onSubmit={handleRegister}>
      <input className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto" type="text" ref={nameRef} name="name" id="" placeholder="your name" required />

      <input className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto" type="email" ref={emailRef} name="email" id="" placeholder="email" required />

        <input
          className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
        ref={passRef}
        type="password"
        name="password"
        id=""
        placeholder="password"
        required
            />
        <input
          className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
        ref={passRef}
        type="password"
        name="confirmPassword"
        id=""
        placeholder="Confirm Password"
        required
            />
            <p className="transformer">Already Have an account? <Link to="/login" className="text-green-400 underline">Please Login</Link></p>

     <input type='submit' value='sign up' className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-green-400 hover:text-white mt-5" />
      </form>
      <ToastContainer />
  </div>
  );
};

export default SignUp;