const API_URL = "https://blog-project-work-kj7d.vercel.app/api/blogs";

const fetchBlogs = () => {
    axios.get(API_URL)
        .then((res) => {
            console.log(res.data);
            setBlogs(res.data);
        })
        .catch(() => {
            console.log("Error fetching data");
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
    const date = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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