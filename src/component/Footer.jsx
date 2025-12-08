import React from 'react';

import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <Icon className='footer-icon' icon="mingcute:question-fill" width="60" height="60" />
        <Icon className='footer-icon' icon="guidance:meeting-room" width="60" height="60" />
        <Icon className='footer-icon' icon="simple-line-icons:calender" width="60" height="60" />
      </div>

    </footer>
  );
};

export default Footer;
