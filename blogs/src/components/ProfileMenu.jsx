import React from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  return (
    <div className='left-menu-generic'>
      <h1 className='top-posts-title'>Actions</h1>
      <ul className='top-posts-ul'>
        <li className='top-posts-li'>
          <Link to='/new-blog' className='top-posts-link'>
            New Post
          </Link>
        </li>
        <li className='top-posts-li'>
          <Link to='/profile/myposts' className='top-posts-link'>
            My Posts
          </Link>
        </li>
        {/* <li className='top-posts-li'>
          <Link to='/profile/user-manage' className='top-posts-link'>
            Users
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default ProfileMenu;
