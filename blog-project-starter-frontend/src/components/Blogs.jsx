import React, { useEffect, useState } from 'react';
import axios from "axios";
import Footer from './common/Footer';
import auth from '../config/firebase';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setadmin] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const API_URL = "https://blog-project-work-kj7d.vercel.app/api/blogs";

    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged(function (user) {
            if (user) {
                if (user.uid === "SeqDul05BvUtCaFvGkTIxQf9gGk2") {
                    setadmin(true);
                } else {
                    setadmin(false);
                }
            } else {
                console.log("user logged out");
            }
        });

        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        axios.get(API_URL)
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log("Error fetching data", err);
            });
    };

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`${API_URL}/like/${blog_id}`);

            if (response.status === 200) {
                fetchBlogs();
            }
        } catch (error) {
            console.error("Error liking the blog post:", error);
        }
    };

    const handleNewBlogSubmit = async (event) => {
        event.preventDefault();

        const today = new Date();
        const date = today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        try {
            await axios.post(API_URL, {
                newTitle,
                newContent,
                date,
                likes: 0
            });

            fetchBlogs();
            setNewTitle('');
            setNewContent('');
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };


return (
  <div className="min-h-screen bg-[#09090b] text-white py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      
      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4 text-center">
          Writing
        </p>

        <h2 className="text-center text-4xl md:text-6xl font-black">
          Latest <span className="text-orange-400">Blogs</span>
        </h2>

        <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto text-center leading-8">
          Explore fresh ideas, stories and updates from the latest posts.
        </p>
      </div>


      {admin && (
        <div className="max-w-3xl mx-auto mb-16 bg-[#111114] border border-slate-800 rounded-[2rem] p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Create New Blog
          </h3>

          <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter blog title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300"
              required
            />

            <textarea
              placeholder="Write your blog content here..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows="6"
              className="w-full px-5 py-4 rounded-2xl bg-[#09090b] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition duration-300 resize-none"
              required
            />

            <button
              type="submit"
              className="w-fit px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-300 font-medium text-white"
            >
              Add Blog
            </button>
          </form>
        </div>
      )}

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#111114] border border-slate-800 rounded-[2rem] p-6 hover:border-orange-500/50 transition duration-300"
          >
            <div className="mb-5">
              <p className="text-sm text-slate-500 mb-3">
                {blog.date}
              </p>

              <h3 className="text-2xl font-bold text-white leading-snug mb-4">
                {blog.newTitle}
              </h3>
            </div>

            <p className="text-slate-400 leading-8 mb-8 line-clamp-4">
              {blog.newContent}
            </p>

            <div className="flex items-center justify-between border-t border-slate-800 pt-5">
              <button
                onClick={() => handleLike(blog._id)}
                className="text-orange-400 hover:text-orange-300 transition duration-300 font-medium"
              >
                Like
              </button>

              <span className="text-slate-500 text-sm">
                {blog.likes} Likes
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  </div>
)

}

export default Blogs;