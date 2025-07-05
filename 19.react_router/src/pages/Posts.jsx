import { useEffect, useState } from "react";
import Post from "../components/Post";
const endpoint = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    const response = await fetch(endpoint);
    const data = await response.json();
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {posts && posts.map((post) => <Post key={post.id} id={post.id} title={post.title} />)}
    </>
  );
}

export default Posts;
