import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedError, setLoggedError] = useState("");
  // const [formInfo, setFormInfo] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoggedError(error.message);
      })
  }

  const handleTwitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoggedError(error.message);
      })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }


  return (
    <div>
      <Helmet><title>Login</title></Helmet>
      <div className="w-full my-5">
        <section className="flex flex-col gap-5 bg-white md:w-1/2 lg:w-1/4 mx-auto rounded-lg p-7">
          <h1 className="text-4xl text-black font-semibold text-center mb-5">Login</h1>
          <form>
            <input type="email" name="email" id="email" placeholder="email" />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="password" className="w-full" />
              {
                showPassword ?
                  <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="eye" title="hide password" /> :
                  <FaRegEye onClick={() => setShowPassword(!showPassword)} className="eye" title="show password" />
              }
            </div>
            <p className="text-base text-center outline-none text-blue-700 underline">Forget Password?</p>
            <button className="btn btn-info text-white text-lg" type="submit">Login</button>
          </form>
          <p className='text-red-600'>{loggedError}</p>
          <p className="text-center text-black">Don&apos;t have an account? <Link to={'/register'} className="text-blue-700 underline">Register</Link></p>
          {/* divider */}
          <div className="flex items-center gap-4">
            <div className="w-full h-0 border border-slate-400" />
            <p>Or</p>
            <div className="w-full h-0 border border-slate-400" />
          </div>
          {/* facebook,google,github,twitter section */}
          <div className="flex flex-col gap-3" id="btn-container">
            <button onClick={handleGoogleSignIn} className="btn bg-transparent border !text-black !border-black">
              <img src="/google.webp" />
              <p className="text-center">Login with Google</p>
              <div />
            </button>
            <button onClick={handleGithubSignIn} className="btn bg-[#2b3137] border-transparent">
              <img src="/github.png" alt="" />
              <p>Login with Github</p>
              <div />
            </button>
            <button onClick={handleFacebookSignIn} className="btn bg-[#3b5998] border border-transparent">
              <img src="/facebook.webp" alt="" />
              <p>Login with Facebook</p>
              <div />
            </button>
            <button onClick={handleTwitterSignIn} className="btn bg-[#1DA1F2] border border-transparent">
              <img src="/twitter.png" alt="" />
              <p>Login with Twitter</p>
              <div />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;