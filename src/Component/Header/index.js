import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import "./Svg.css";
import { Cancel, Search } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@material-ui/core";
function Header() {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const location = useLocation();
  const HomeIcon = useRef();
  const DirectIcon = useRef();
  const ExploreIcon = useRef();
  const NotifyIcon = useRef();
  useEffect(() => {
    if (location.pathname === "/") {
      HomeIcon.current.classList.add("noanimation");
      DirectIcon.current.classList.remove("noanimation");
      ExploreIcon.current.classList.remove("noanimation");
      NotifyIcon.current.classList.remove("noanimation");
    } else if (location.pathname === "/direct") {
      HomeIcon.current.classList.remove("noanimation");
      DirectIcon.current.classList.add("noanimation");
      ExploreIcon.current.classList.remove("noanimation");
      NotifyIcon.current.classList.remove("noanimation");
    } else if (location.pathname === "/explore") {
      HomeIcon.current.classList.remove("noanimation");
      DirectIcon.current.classList.remove("noanimation");
      ExploreIcon.current.classList.add("noanimation");
      NotifyIcon.current.classList.remove("noanimation");
    } else if (location.pathname === "/notify") {
      HomeIcon.current.classList.remove("noanimation");
      DirectIcon.current.classList.remove("noanimation");
      ExploreIcon.current.classList.remove("noanimation");
      NotifyIcon.current.classList.add("noanimation");
    } else {
      HomeIcon.current.classList.remove("noanimation");
      DirectIcon.current.classList.remove("noanimation");
      ExploreIcon.current.classList.remove("noanimation");
      NotifyIcon.current.classList.remove("noanimation");
    }
  });

  const showText = () => {
    setIsSearchShow(!isSearchShow);
  };
  const updateInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="header">
      <img
        src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />

      {isSearchShow ? (
        <div className="header__SearchContainer">
          <Search className="header__icon" />
          <input
            type="text"
            placeholder="Search"
            onChange={updateInput}
            value={searchInput}
          />
          <Cancel className="header__icon" onClick={showText} />
        </div>
      ) : (
        <div className="header__SearchContainer cursorText" onClick={showText}>
          <Search className="header__icon" />
          <span className="header__dummysearchtext">
            {searchInput ? searchInput : "Search"}
          </span>
        </div>
      )}

      <div className="header__iconContainer">
        <Link to="/" className="header__homeicon svgicon  " ref={HomeIcon}>
          <svg viewBox="-20 -70 600 600" xmlns="http://www.w3.org/2000/svg">
            <path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" />
          </svg>
        </Link>

        <Link
          to="/direct"
          className="header__directicon svgicon  animationIcon"
          ref={DirectIcon}
        >
          <svg viewBox="0 -5 26 26" xmlns="http://www.w3.org/2000/svg">
            <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z" />
          </svg>
        </Link>

        <Link
          to="/explore"
          className="header__exploreicon svgicon animationIcon"
          ref={ExploreIcon}
        >
          <svg viewBox="-20 -70 520 520" xmlns="http://www.w3.org/2000/svg">
            <g>
              <g>
                <g>
                  <path
                    d="M213.333,236.8c13.013,0,23.467-10.56,23.467-23.467s-10.453-23.467-23.467-23.467c-12.907,0-23.467,10.56-23.467,23.467
				S200.427,236.8,213.333,236.8z"
                  />
                  <path
                    d="M213.333,0C95.467,0,0,95.467,0,213.333c0,117.76,95.467,213.333,213.333,213.333s213.333-95.573,213.333-213.333
				C426.667,95.467,331.2,0,213.333,0z M260.053,260.053l-174.72,81.28l81.28-174.72l174.72-81.28L260.053,260.053z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </Link>

        <Link
          to="/notify"
          className="header__hearticon svgicon animationIcon"
          ref={NotifyIcon}
        >
          <svg viewBox="-20 -70 500 550">
            <g>
              <path
                d="M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801
		C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </Link>
        <Link className="header__avatar" to="/profile">
          <Avatar className="header__avatarIcon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
