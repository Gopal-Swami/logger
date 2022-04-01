import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { listPosts } from '../actions/postActions';

const Navigation = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const [searchType, setSearchType] = useState('All');
  const [keyword, setKeyword] = useState('');
  const { loading, error, userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSearch = () => {
    dispatch(listPosts(searchType, keyword));
  };

  const handleLogoClick = () => {
    setKeyword('');
    navigate('/');
  };

  useEffect(() => {
    if (keyword === '') {
      dispatch(listPosts());
    }
  }, [dispatch, keyword]);
  return (
    <header className="navigation-bar-container">
      <div className="nav-items">
        <h1 onClick={handleLogoClick} style={{ cursor: 'pointer' }} id="logo">
          Logger....
        </h1>
      </div>
      <div className="nav-items">
        <select
          name="search-type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="search-type"
          id="search-type"
        >
          <option defaultValue value="all">
            All
          </option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="author">Author</option>
        </select>
        <input
          type="search"
          className="search-blog q"
          id="q"
          placeholder="Search Blog..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="search-blog-btn q-btn"
          id="search-blog"
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: '#3D087B' }}
          ></i>
        </button>
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          <li className="nav-links-item">
            <Link to="/new-blog">Create Your Blog</Link>
          </li>

          {userInfo ? (
            <>
              <li className="nav-links-item">
                <Link to="/profile">
                  <i className="fa-solid fa-user"></i>
                  {userInfo.name}
                </Link>
              </li>
              <li className="nav-links-item">
                <button onClick={handleLogOut} className="log-out">
                  <i className="fa-solid fa-power-off"></i>
                </button>
              </li>
            </>
          ) : (
            <li className="nav-links-item">
              <Link to="/login">Log In/Sign Up</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
