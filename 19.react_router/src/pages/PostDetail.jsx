import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const endpoint = `https://jsonplaceholder.typicode.com/posts`;

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  async function fetchPost() {
    const response = await fetch(`${endpoint}/${id}`);
    const data = await response.json();
    setPost(data);
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {post && <h3>{post.title}</h3>}
      {post && <p>{post.body}</p>}
    </>
  );
}

export default PostDetail;
