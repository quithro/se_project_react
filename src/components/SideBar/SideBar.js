import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__avatar" src={avatar} alt="avatar" />
            <h3 className="sidebar__name">Carlos Sierra</h3>
        </div>
    );
};

export default SideBar;