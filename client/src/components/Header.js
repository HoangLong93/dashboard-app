import React from 'react';

const Header = () => {
  return (
    <div className="ui secondary menu">
      <div className="header item">Logo</div>
      <div className="active item">
        Home
          </div>
      <div className="right menu">
        <div className="ui item">
          Settings
            </div>
        <div className="ui item">
          Logout
            </div>
      </div>
    </div>
  );
};

export default Header;
