import React, { useState } from 'react';
import axios from 'axios';

function PostCreate() {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="input">
            Title
            <input
              value={title}
              id="input"
              className="form-control"
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
