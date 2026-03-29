import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/home");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/home");
            })
            .catch(() => {
                console.log("error signing in please try again");
                setErr("Error signing in. Please try again.");
            });
    };

  return (
  <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
    <form
      onSubmit={handleLogin}
      className="w-full max-w-xl bg-[#111114] border border-slate-800 rounded-[2rem] p-8 md:p-10"
    >
      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
        Login
      </p>

      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        Welcome Back
      </h2>

      <p className="text-slate-400 text-lg leading-8 mb-10 max-w-md">
        Sign in to continue building and exploring your space.
      </p>

      <div className="mb-6">
        <label className="block text-slate-400 text-sm mb-3">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300"
        />
      </div>

      <div className="mb-5">
        <label className="block text-slate-400 text-sm mb-3">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300"
        />
      </div>

      {err && (
        <p className="text-red-400 text-sm mb-5">
          {err}
        </p>
      )}

      <p
        className="text-slate-500 hover:text-orange-400 cursor-pointer text-sm mb-8 transition duration-300"
        onClick={() => navigate("/signup")}
      >
        New here? <span className="text-orange-400">Create an account</span>
      </p>

      <button
        type="submit"
        className="w-full px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition duration-300"
      >
        Login
      </button>
    </form>
  </div>
)
}

export default Login;