import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import {
  getPostById,
  createPost,
  updateUserPost,
} from '../actions/postActions';

const NewBlogScreen = () => {
  const [postLoading, setPostLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [fileNameForUser, setFileNameForUser] = useState(null);
  const [postBody, setPostBody] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pid = params.id;
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;
  const listPostById = useSelector((state) => state.listPostById);
  const { loading, error, post } = listPostById;
  const createNewPost = useSelector((state) => state.createNewPost);
  const {
    loading: newPostLoading,
    error: newPostError,
    post: newPost,
  } = createNewPost;
  const updatePost = useSelector((state) => state.updatePost);
  const {
    loading: updatePostLoading,
    error: updatePostError,
    post: updatedPost,
  } = updatePost;
  //updatePost
  const createNewPosts = () => {
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('description', postBody);
    formdata.append('username', userInfo.username);
    formdata.append('file', file);
    if (pid) {
      if (title !== '' && postBody !== '') {
        dispatch(updateUserPost(pid, formdata));
        navigate('/');
      } else {
        alert('Please Add Mandatory Fields');
      }
    } else {
      if (title !== '' && postBody !== '') {
        dispatch(createPost(formdata));

        navigate('/');
      } else {
        alert('Please Add Mandatory Fields');
      }
    }
  };

  const handleDiscard = () => {
    if (
      window.confirm(
        'Your Changes Will Not Be Saved. Are your sure to discard ?'
      )
    ) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (userInfo) {
      if (pid) {
        dispatch(getPostById(pid));
        setTimeout(() => {
          setPostLoading(loading);
          setTitle(post.title);
          setPostBody(post.description);
          setFile(post.photo);
        }, 1000);
      } else {
        setTitle('');
        setPostBody('');
      }
    } else {
      navigate('/login');
    }
  }, [dispatch, pid]);
  return (
    <div className="new-blog-container">
      <div className="new-blog-form">
        <h1 className="new-post-title">New Post</h1>
        <textarea
          name="post-title"
          id="post-title"
          cols="30"
          rows="1"
          className="new-post-title"
          placeholder="Post Title.........."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <label
          htmlFor="new-post-title"
          className="post-title-warn form-label"
        ></label>
        {pid ? (
          postLoading ? (
            <Loader />
          ) : (
            <div className="post-image">
              <img src={post.photo} alt={post.photo} />
            </div>
          )
        ) : (
          ''
        )}
        <label
          htmlFor="post-thumb"
          className="form-label new-post-image-container"
        >
          {post ? 'Update Photo' : 'Select or Drop Cover Photo'}
          {fileNameForUser && (
            <>
              <br />
              {fileNameForUser}
            </>
          )}
        </label>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setFileNameForUser(e.target.files[0].name);
          }}
          className="post-thumb"
          id="post-thumb"
        />
        <label
          htmlFor="post-thumb"
          className="form-label post-thumb-warn"
        ></label>
        <textarea
          name="post-body"
          id="post-body"
          cols="30"
          rows="10"
          className="post-body"
          placeholder="Post Body........."
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <label
          htmlFor="post-body"
          className="post-body-warn form-label"
        ></label>
        {newPostLoading || updatePostLoading ? (
          <Loader />
        ) : (
          <button
            onClick={createNewPosts}
            className="submit-post"
            id="submit-post"
          >
            {pid ? 'Update' : 'Post'}
          </button>
        )}

        <button onClick={handleDiscard} className="clear-form">
          Discard
        </button>
      </div>
    </div>
  );
};

export default NewBlogScreen;
