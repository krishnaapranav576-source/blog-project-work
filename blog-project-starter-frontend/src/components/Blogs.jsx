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
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">
                Latest <span className="text-orange-400">Blogs</span> 📚
            </h2>

            {admin && (
                <div
                    className="blog-creation-form mb-8"
                    style={{ width: "80%", margin: "auto" }}
                >
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-2 border rounded"
                            required
                        />

                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="p-2 border rounded"
                            rows="4"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600"
                        >
                            Add Blog
                        </button>
                    </form>
                </div>
            )}

            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                {blogs.map((blog) => (
                    <div
                        key={blog._id}
                        className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg"
                    >
                        <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">
                            {blog.newTitle}
                        </h3>

                        <p className="blog-date text-gray-400 text-sm mb-4">
                            {blog.date}
                        </p>

                        <p className="blog-content text-gray-600 mb-4">
                            {blog.newContent}
                        </p>

                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => handleLike(blog._id)}
                        >
                            Like
                        </span>

                        <span className="ml-2">
                            {blog.likes} Likes
                        </span>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Blogs;