import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase';
import { signOut } from 'firebase/auth';
function Navbar() {
    const navigate = useNavigate()
    const [log,setlog] = useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          setlog(true)
          console.log("user logged in")
        }
        else{
          setlog(false)
          console.log("user logged out")
        }
      })
    })

    function logout(){
      signOut(auth)
    }
    
  return (
  <div className="py-5 px-6 md:px-16 flex justify-between items-center bg-[#09090b] border-b border-slate-800">
    <h2 className="text-2xl font-bold text-white">
      Personal
    </h2>

    <div className="flex items-center text-slate-400">
      <Link
        className="list-none px-5 hover:text-orange-400 transition duration-300"
        to={"/home"}
      >
        Home
      </Link>

      <Link
        className="list-none px-5 hover:text-orange-400 transition duration-300"
        to={"/blogs"}
      >
        Blogs
      </Link>

      <Link
        className="list-none px-5 hover:text-orange-400 transition duration-300"
      >
        About
      </Link>

      {log ? (
        <button
          className="ml-5 hidden md:block px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition duration-300"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          className="ml-5 hidden md:block px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition duration-300"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  </div>
)
}

export default Navbar