import avatar from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
    return (
      <div className="sidebar">
        <img
          className="sidebar__user-image"
          alt="user-image"
          src={avatar}
        />
        <h2 className="siderbar__user-name" alt="user-name">
            Carlos Sierra
        </h2>
      </div>
    );
  };

export default SideBar;