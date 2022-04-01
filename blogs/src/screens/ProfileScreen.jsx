import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions';
import Loader from '../components/Loader';
import ProfileMenu from '../components/ProfileMenu';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [username, setUsername] = useState(userInfo.username);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateRequest = () => {
    dispatch(updateUser(userInfo._id, username, name, email, newPassword));
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <>
      <ProfileMenu />
      <div className="profile-container">
        <div className="profile-form">
          <h1 className="profile-name">{username}</h1>
          <div className="profile-image">
            <img
              src="https://wallpaperaccess.com/full/7445.jpg"
              alt="Profile Pic"
              width={150}
              height={150}
            />
          </div>

          <input
            type="text"
            className="username"
            id="username"
            placeholder="Username"
            value={username}
            readOnly
          />

          <input
            type="text"
            className="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="form-label name-warn">
            Name
          </label>

          <input
            type="text"
            className="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="form-label email-warn">
            Email
          </label>

          <input
            type="text"
            className="password"
            id="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <label htmlFor="password" className="form-label password-warn">
            Password
          </label>

          <input
            type="text"
            className="confirm-password"
            id="confirm-password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label
            htmlFor="confirm-password"
            className="form-label cnf-password-warn"
          >
            Confirm Password
          </label>

          {loading ? (
            <Loader />
          ) : (
            <>
              <button
                type="button"
                onClick={handleUpdateRequest}
                className="signup-btn"
                id="signup"
              >
                Update
              </button>
            </>
          )}

          <Link to="/" className="go-back">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
