import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "/api/images/";

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
  };

  return (
    <div className='post'>
      {post.photo && <img className='postImg' src={PF + post.photo} alt='' draggable={false} />}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>{new Date(post.createdAt).toLocaleDateString("ru", options)}</span>
      </div>
      <p className='postDesc'>{post.desc}</p>
    </div>
  );
}
