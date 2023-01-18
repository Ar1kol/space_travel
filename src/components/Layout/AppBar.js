import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import iconClose from "../../assets/shared/icon-close.svg";

const AppBar = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  // useEffect(() => {
  //   const nav = document.querySelector(".primary-navigation");
  //   const navToggle = document.querySelector(".mobile-nav-toggle");
  //   console.log(nav);
  //   console.log(navToggle);
  //   navToggle.addEventListener("click", () => {
  //     const visability = nav.getAttribute("data-visible");
  //     console.log(visability);
  //   });
  // }, []);

  return (
    <header className="primary-header flex">
      {/* ::before is here */}
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        onClick={handleClick}
        className={`mobile-nav-toggle ${visibility ? "closed" : ""}`}
        aria-controls="primary-navigation"
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators flex ${
            visibility ? "visible" : ""
          }`}
        >
          <li className="active" />
          <Link
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            to="/"
          >
            <span aria-hidden="true">00</span>Home
          </Link>
          <li />
          <Link
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            to="/"
          >
            <span aria-hidden="true">01</span>Destination
          </Link>
          <li />
          <Link
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            to="/"
          >
            <span aria-hidden="true">02</span>Crew
          </Link>
          <li />
          <Link
            className="ff-sans-cond uppercase text-white letter-spacing-2"
            to="/"
          >
            <span aria-hidden="true">03</span>Technology
          </Link>
        </ul>
      </nav>
      {/* ::after is here */}
    </header>
  );
};

export default AppBar;
