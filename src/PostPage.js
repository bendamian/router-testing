import React from "react";
import { useParams, Link } from "react-router-dom";
const PostPage = ({ post, handleDelete }) => {
  const { id } = useParams();
  const pos = post.find(post => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {pos && (
          <>
            <h2>{pos.title}</h2>
            <p className="postDate">{pos.datetime}</p>
            <p className="postBody">{pos.body}</p>
            <button onClick={() => handleDelete(pos.id)}>Delete Post</button>
          </>
        )}
        {!pos && (
          <>
            <h2>Post not Found</h2>

            <p>
              <Link to='/'>Vist Our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
