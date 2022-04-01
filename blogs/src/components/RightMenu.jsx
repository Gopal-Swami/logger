import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listTopPosts } from '../actions/postActions';
import Loader from '../components/Loader';
const RightMenu = () => {
  const dispatch = useDispatch();
  const latestPosts = useSelector((state) => state.latestPosts);
  const { loading, error, posts } = latestPosts;
  useEffect(() => {
    dispatch(listTopPosts());
  }, [dispatch]);
  return (
    <div className='right-menu-generic'>
      <h1 className='top-authors-title' style={{ fontSize: '1.5rem' }}>
        Latest Post By Author
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <ul className='top-authors-ul'>
          {posts.map((post) => (
            <li key={post._id} className='top-authors-li'>
              <Link to='#' className='top-authors-link'>
                {post.username}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RightMenu;
