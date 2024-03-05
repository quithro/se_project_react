import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";


const Header = ({ onCreateModal, location }) => {
    const currentDate = new Date().toLocaleString("default", {
        month: "long",
        day: "numeric",
    });

    return (
        <header className="header">
            <div className="header__logo">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            <div>{currentDate}</div>
            </div>
            <div className="header__avatar-logo">
                <ToggleSwitch />
            <div>
            <button
                className="header__button"
                type="text"
                onClick={onCreateModal}
            >
            + Add Clothes
            </button>
            </div>
            <Link to="/profile" className="header__name">
                Carlos Sierra
            </Link>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
          </div>
        </header>
      );
    };

export default Header;