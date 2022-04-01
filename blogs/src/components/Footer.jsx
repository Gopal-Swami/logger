import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-option-container'>
        <div className='socials'>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href='#'>Facebook</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>Pinterest</a>
            </li>
            <li>
              <a href='#'>Quora</a>
            </li>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className='suggested-sites'>
          <h3>Suggested Websites</h3>
          <ul>
            <li>
              <a href='#'>Blogger</a>
            </li>
            <li>
              <a href='#'>Wordpress</a>
            </li>
            <li>
              <a href='#'>India Press</a>
            </li>
            <li>
              <a href='#'>Vally Mon</a>
            </li>
            <li>
              <a href='#'>New Blogger</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className='copyright'> Logger &copy; 2022 </h2>
    </div>
  );
};

export default Footer;
