import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
      Something something
      <PostCreate />
      <br />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
