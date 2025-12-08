import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="conainer header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" />
          </div>
          <div className="header-icons">
          <Icon className="header-icon-btn" icon="fa-solid:home" width="25" height="25" />
          <Icon className="header-icon-btn" icon="la:tools" width="25" height="25" />
          <Icon className="header-icon-btn" icon="heroicons:bell-16-solid" width="25" height="25" />
          <Icon className="header-icon-btn" icon="iconoir:profile-circle" width="25" height="24" />
          <Icon className="header-menu-icon" icon="ant-design:more-outlined" width="25" height="25" />
            
          </div>
        </div>
      </div>
    </header>
  );
};;export default Header;