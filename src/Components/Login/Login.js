import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  useEffect(() => {
    if (error) {
        toast('Incorrect Login Details')
    }
}, [error])

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading />;
  }
  
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("check your email");
    } else {
      toast('please enter your email first')
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-10 mb-5 font-mono text-cyan-800">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="email address"
          required
        />
        <input
          className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="enter password"
          required
        />
        <input className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-green-400 hover:text-white" type="submit" value="Login" />
        <p className="transformer">
          New in Photography?{" "}
          <Link
            to="/signup"
            className="text-green-400 underline"
            onClick={navigateToSignUp}
          >
            Please register
          </Link>{" "}
        </p>
        <p className="transformer">
          forget password?{" "}
          <button className="resetPass text-rose-400 underline" onClick={handleResetPassword}>
            reset password
          </button>
        </p>
      </form>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;