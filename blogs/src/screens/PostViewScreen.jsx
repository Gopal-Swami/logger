import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { getPostById } from '../actions/postActions';

const PostViewScreen = () => {
  const [postLoading, setPostLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const listPostById = useSelector((state) => state.listPostById);
  const { loading, error, post } = listPostById;
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;

  useEffect(() => {
    dispatch(getPostById(id));
    setTimeout(() => {
      setPostLoading(loading);
    }, 1000);
  }, [dispatch, id]);
  return (
    <div className="new-blog-container">
      <div className="new-blog-form">
        <h1 className="new-post-title">Post</h1>
        {postLoading ? (
          <Loader />
        ) : (
          <>
            <textarea
              name="post-title"
              id="post-title"
              cols="30"
              rows="1"
              className="new-post-title view-post-form"
              placeholder="Post Title.........."
              readOnly
            >
              {post.title}
            </textarea>
            <label
              htmlFor="new-post-title"
              className="post-title-warn form-label"
            ></label>
            <div className="post-image">
              <img src={post.photo} alt="This is a brand new Post on #1" />
            </div>
            <p
              name="post-body"
              id="post-body"
              className="post-body view-post-form"
              placeholder="Post Body........."
              readOnly
            >
              {post.description}
            </p>
            <label
              htmlFor="post-body"
              className="post-body-warn form-label"
            ></label>
            {userInfo && userInfo.username === post.username && (
              <button
                onClick={(e) => navigate(`/new-blog/${id}`)}
                className="clear-form"
              >
                Edit
              </button>
            )}

            <button
              onClick={(e) => navigate('/')}
              className="submit-post"
              id="back-post"
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostViewScreen;
