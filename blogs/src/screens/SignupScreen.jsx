import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loader from '../components/Loader';

const Signup = () => {
  const [warnError, setWarnError] = useState(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const submitHandler = () => {
    if (username === '') {
      setWarnError('Please Provide a valid Username');
    } else if (name === '') {
      setWarnError('Please provide a valid name');
    } else if (email === '') {
      setWarnError('Please provide a valid email');
    } else if (password === '') {
      setWarnError('Please provide a valid password');
    } else if (password !== confirmPassword) {
      setWarnError('Password does not match');
    } else {
      dispatch(registerUser(username, name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);
  return (
    <div className='signup-form'>
      <div className='signup-form-container'>
        <h1>Sign Up</h1>
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
              id='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type='text'
              className='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type='text'
              className='email'
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

            <input
              type='text'
              className='confirm-password'
              id='confirm-password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type='button'
              onClick={submitHandler}
              className='signup-btn'
              id='signup'
            >
              Sign Up
            </button>

            <Link to='/login' className='already-registered'>
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
