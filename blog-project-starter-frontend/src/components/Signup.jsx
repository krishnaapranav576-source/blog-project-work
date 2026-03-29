import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 


useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          navigate("/home")
        }
        
      })
})


    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password).then((res)=>{
            console.log(res)
        }).catch(()=>{
            console.log("failed to add user")
        })

        
        console.log('User registered:', { email, password });
      
        navigate('/login'); 
    };
return (
  <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-[#111114] border border-slate-800 rounded-[2rem] p-8 md:p-10"
    >
      <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
        Register
      </p>

      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
        Create Account
      </h2>

      <p className="text-slate-400 text-lg leading-8 mb-10 max-w-md">
        Join and start building your own space.
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

      <div className="mb-6">
        <label className="block text-slate-400 text-sm mb-3">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Create a password"
          className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300"
        />
      </div>

      <div className="mb-5">
        <label className="block text-slate-400 text-sm mb-3">
          Confirm Password
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm your password"
          className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300"
        />

        {error && (
          <p className="text-red-400 text-sm mt-3">
            {error}
          </p>
        )}
      </div>

      <p
        className="text-slate-500 hover:text-orange-400 cursor-pointer text-sm mb-8 transition duration-300"
        onClick={() => navigate("/login")}
      >
        Already have an account?{" "}
        <span className="text-orange-400">Login here</span>
      </p>

      <button
        type="submit"
        className="w-full px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition duration-300"
      >
        Register
      </button>
    </form>
  </div>
)
}

export default Signup;
