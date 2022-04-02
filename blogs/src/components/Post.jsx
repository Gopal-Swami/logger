import React from 'react';
import { Link } from 'react-router-dom';
const Post = ({ id, title, description, photo, author, publishedOn }) => {
  return (
    <div className="post-container">
      <h1 className="post-title">{title}</h1>
      <div className="post-image">
        <img src={photo} alt={photo} />
      </div>
      <p className="post-content">
        {description.substring(0, 100) + '...'}
        <Link to={`/view-blog/${id}`} className="read-more-about-post">
          Read More
        </Link>
      </p>
      <p className="about-post">
        <strong>Published By : </strong>
        {author} <span> </span>
        <strong> Published On :</strong> {publishedOn.substring(0, 10)}
      </p>
    </div>
  );
};

export default Post;
