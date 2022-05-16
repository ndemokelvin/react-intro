import React from "react";

const DisplayPosts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h6>{post.title}</h6>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayPosts;
