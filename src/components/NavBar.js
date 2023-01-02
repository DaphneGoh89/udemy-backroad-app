import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <PageLink {...link} key={link.id} />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a
                  href={socialLink.link}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={socialLink.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

const PageLink = (props) => {
  const { id, link, text } = props;

  return (
    <li key={id}>
      <a href={link} className="nav-link">
        {" "}
        {text}{" "}
      </a>
    </li>
  );
};
