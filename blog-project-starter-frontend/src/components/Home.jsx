import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
 return (
    <div className="bg-[#09090b] text-white min-h-screen overflow-hidden">
      
        <div className="relative px-6 md:px-16 pt-16 md:pt-24">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>

            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="uppercase tracking-[0.4em] text-sm text-slate-500 mb-5">
                        Portfolio
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
                        Building
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                            Digital Stories
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mt-6">
                        Jacky Thomas
                    </h2>

                    <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
                        I design and build websites that feel creative, modern and
                        human. I enjoy mixing clean UI with bold visuals to create
                        something memorable.
                    </p>

                    <div className="flex gap-4 mt-10 flex-wrap">
                        <button className="px-8 py-4 rounded-full bg-orange-500 font-medium shadow-[0_0_30px_rgba(249,115,22,0.35)]">
                            Hire Me
                        </button>

                        <button className="px-8 py-4 rounded-full border border-slate-700 bg-slate-900/50">
                            Download CV
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] rounded-full border border-orange-500/20"></div>
                    <div className="absolute w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] rounded-full border border-slate-700"></div>

                    <img
                        src={BlogProfileImage}
                        alt="Profile"
                        className="relative w-72 md:w-[26rem] rounded-[2rem] object-cover grayscale rotate-2 border border-slate-800 shadow-2xl"
                    />
                </div>
            </div>
        </div>

       
        <div className="mt-24 px-6 md:px-16">
            <div className="bg-[#111114] border border-slate-800 rounded-[2.5rem] p-8 md:p-10">
                <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center">
                    <img src={HTML} alt="HTML" className="w-12 opacity-70" />
                    <img src={CSS} alt="CSS" className="w-12 opacity-70" />
                    <img src={JS} alt="JavaScript" className="w-12 opacity-70" />
                    <img src={REACTICON} alt="React" className="w-12 opacity-70" />
                    <img src={DB} alt="Database" className="w-12 opacity-70" />
                    <img src={NODE} alt="Node" className="w-12 opacity-70" />
                </div>
            </div>
        </div>

       
        <div className="px-6 md:px-16 py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#151515] to-[#1d1d22] border border-slate-800 rounded-[2rem] p-8">
                    <h2 className="text-5xl font-black text-orange-400">06</h2>
                    <p className="text-slate-400 mt-3 leading-7">
                        Projects completed with modern UI and creative direction.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#151515] to-[#1d1d22] border border-slate-800 rounded-[2rem] p-8 sm:translate-y-12">
                    <h2 className="text-5xl font-black text-cyan-400">06</h2>
                    <p className="text-slate-400 mt-3 leading-7">
                        Months of hands-on experience building and designing.
                    </p>
                </div>
            </div>

            <div>
                <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
                    What I Do
                </p>

                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Designing ideas
                    <br />
                    into experiences.
                </h2>

                <p className="mt-8 text-slate-400 leading-8 text-lg max-w-2xl">
                    I create websites, landing pages and portfolios that don’t feel
                    copied. I prefer building something with a strong visual style
                    and smooth interaction rather than using a basic template.
                </p>
            </div>
        </div>

        <div className="px-6 md:px-16 pb-24">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
                <div>
                    <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-3">
                        Selected Work
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black">
                        Featured Projects
                    </h2>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-[#111114] border border-slate-800 rounded-[2rem] overflow-hidden">
                    <img
                        src={P1}
                        alt="Project 1"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">Creative Landing Page</h3>
                        <p className="text-slate-400 mt-3">
                            A bold modern landing page with cinematic styling and clean UI.
                        </p>
                    </div>
                </div>

                <div className="bg-[#111114] border border-slate-800 rounded-[2rem] overflow-hidden lg:-translate-y-10">
                    <img
                        src={P2}
                        alt="Project 2"
                        className="w-full h-80 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">Portfolio Concept</h3>
                        <p className="text-slate-400 mt-3">
                            A unique portfolio with layered sections and motion.
                        </p>
                    </div>
                </div>

                <div className="bg-[#111114] border border-slate-800 rounded-[2rem] overflow-hidden">
                    <img
                        src={P3}
                        alt="Project 3"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">Modern Dashboard</h3>
                        <p className="text-slate-400 mt-3">
                            A clean dashboard UI focused on clarity and style.
                        </p>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="px-6 md:px-16 pb-28">
            <div className="bg-[#111114] border border-slate-800 rounded-[3rem] p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
                        Writing
                    </p>

                    <h2 className="text-4xl md:text-6xl font-black leading-tight">
                        I write about
                        <span className="text-orange-400"> tech & ideas</span>
                    </h2>

                    <p className="mt-8 text-slate-400 text-lg leading-8">
                        I share what I learn while building websites, trying new ideas
                        and exploring design. My blogs are more like notes from the
                        journey than tutorials.
                    </p>

                    <button
                        className="mt-10 px-8 py-4 rounded-full bg-white text-black font-medium"
                        onClick={() => navigate("/blogs")}
                    >
                        Read My Blogs
                    </button>
                </div>

                <div className="flex justify-center">
                    <img
                        src={BlogImage}
                        alt="Blog"
                        className="w-80 md:w-[28rem] rounded-[2rem] border border-slate-800 shadow-2xl -rotate-3"
                    />
                </div>
            </div>
        </div>

        <Footer />
    </div>
);
}

export default Home