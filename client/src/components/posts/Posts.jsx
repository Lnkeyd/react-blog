import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {posts
        .sort((aPost, bPost) => new Date(aPost.createdAt) >= new Date(bPost.createdAt))
        .map((p, i) => (
          <Post post={p} key={i} />
        ))}
    </div>
  );
}
