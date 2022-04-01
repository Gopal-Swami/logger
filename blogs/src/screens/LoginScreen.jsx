import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warnError, setWarnError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const handleLogin = () => {
    if (email === '') {
      setWarnError('Email Cannot Be Blank');
    } else if (password === '') {
      setWarnError('Password Cannot Be Blank');
    } else {
      dispatch(login(email, password));
      setWarnError(null);
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [dispatch, navigate, userInfo]);
  return (
    <div className='login-form'>
      <div className='login-form-container'>
        <h1>Log In</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error && (
              <label htmlFor='password' className='form-label show'>
                {error}
              </label>
            )}
            {warnError && (
              <label htmlFor='password' className='form-label show'>
                {warnError}
              </label>
            )}
            <input
              type='text'
              className='username'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='text'
              className='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type='button'
              onClick={handleLogin}
              className='login-btn'
              id='login'
            >
              Log In
            </button>

            <Link to='/signup' className='new-user'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
