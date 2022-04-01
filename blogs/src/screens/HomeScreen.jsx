import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsList;
  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);
  return (
    <>
      <LeftMenu />
      <div className="home-screen-container">
        {loading ? (
          <Loader />
        ) : posts.length === 0 ? (
          <h2 style={{ textAlign: 'center' }}>No Post To Display</h2>
        ) : (
          posts.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              title={post.title}
              description={post.description}
              photo={post.photo}
              author={post.username}
              publishedOn={post.createdAt}
            />
          ))
        )}
      </div>
      <RightMenu />
    </>
  );
};

export default HomeScreen;
