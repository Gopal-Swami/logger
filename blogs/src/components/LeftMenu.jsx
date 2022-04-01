import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listTopPosts } from '../actions/postActions';
import Loader from '../components/Loader';

const LeftMenu = () => {
  const dispatch = useDispatch();
  const latestPosts = useSelector((state) => state.latestPosts);
  const { loading, error, posts } = latestPosts;

  useEffect(() => {
    dispatch(listTopPosts());
  }, [dispatch]);
  return (
    <div className='left-menu-generic'>
      <h1 className='top-posts-title'>Latest Posts</h1>
      {error ? (
        <h1>No Posts To Display</h1>
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <ul className='top-posts-ul'>
            {posts.map((post) => (
              <li className='top-posts-li' key={post._id}>
                <Link to={`/view-blog/${post._id}`} className='top-posts-link'>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default LeftMenu;
