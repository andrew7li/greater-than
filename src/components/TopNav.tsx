import "./TopNav.scss";
import { FaBars } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="topNavigation" id="navbar">
      <a href="/">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
      </a>
      <div className="space" />
      <div className="navLinks">
        {/* <a href="#assignments">Assignments</a>
        <a href="#labs">Labs</a>
        <a href="#lectures">Lectures</a>
        <a href="#hours">Hours</a>
        <a href="#staff">Staff</a>
        <a href="#misc">More</a> */}
      </div>

      <div className="navLinksMini" id="navLinksMini">
        {/* <a href="#assignments">Assignments</a>
        <a href="#labs">Labs</a>
        <a href="#lectures">Lectures</a>
        <a href="#hours">Hours</a>
        <a href="#staff">Staff</a>
        <a href="#misc">More</a> */}
      </div>
      <div
        className="hamburgerIcon"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const sidebar = document.querySelector(`.navLinksMini`);
          if (sidebar) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            sidebar.classList.toggle(`open`);
          }
        }}
      >
        <FaBars className="hamburger" />
      </div>
    </div>
  );
}
