import { Link } from "react-router-dom";
import "./header.css";
import { Dropdown } from "antd";

function Header() {

    function Logout() {
        localStorage.removeItem("userToken")
        window.location.pathname = "/"
    }

    const items = [
        {
          key: '1',
          label: (
            <span style={{color:"red",fontWeight:"bold"}} onClick={()=>Logout()} >Logout</span>
          ),
        },
      ];

    return (
        <header className="header">
            {/* Left Side: Logo */}
            <div className="header__logo">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="header__logo-svg"
                >
                    <rect width="36" height="36" rx="8" fill="#646cff" />
                    <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        fill="#fff"
                        fontSize="12"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                    >
                        Event
                    </text>
                </svg>
                <span className="header__logo-text">
                    event-booking
                </span>
            </div>

            {/* Right Side: Navigation Buttons and Profile */}
            <div className="header__nav">
                <Link to="/">
                    <button className="header__btn">Home</button>
                </Link>
                <Link to="/about">
                    <button className="header__btn">About</button>
                </Link>
                <Link to="/contact">
                    <button className="header__btn">Contact</button>
                </Link>
                <Link to="/services">
                    <button className="header__btn">Services</button>
                </Link>
                <Dropdown menu={{ items }} placement="bottom" trigger="click" >
                <button className="header__profile-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#646cff">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                    </svg>
                </button>
                </Dropdown>
            </div>
        </header>
    );
}

export default Header