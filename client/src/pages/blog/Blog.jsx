// import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./blog.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {/* <Header /> */}
      <div className='home'>
        <Posts posts={posts} />
      </div>
    </>
  );
}
