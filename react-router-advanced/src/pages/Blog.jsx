import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced React Router" },
    { id: 3, title: "Protected Routes" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
