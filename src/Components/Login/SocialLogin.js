import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorMsg = "";
  if (error) {
    errorMsg = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    // return <Loading />
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-cyan-700">_____________________</span>
        <p className="mx-4 mt-3 text-cyan-700">OR</p>
        <span className="text-cyan-700">______________________</span>
      </div>
      <div className="social-blog">
        <button
          onClick={() => signInWithGoogle()}
          className="ring-2 rounded-lg ring-green-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-green-400 hover:text-white mt-5"
        >
          Sign in with Google
        </button>
      </div>
      <p className="text-red-500">{errorMsg}</p>
    </div>
  );
};

export default SocialLogin;
