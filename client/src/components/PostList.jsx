import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
    console.log('fetched', posts);
  }, []);

  return (
    <div>
      {/* {posts.map((post) => <div><h2>{post.title}</h2></div>)} */}

      {/* {Object.keys(posts).forEach((key) => {
        <h1>{posts[key]}</h1>;
      })} */}

      something post list
    </div>
  );
}

export default PostList;
