import { useEffect, useState } from "react";
import ThemeToggle from "../../ThemeToggle";
import "./Navbar.css";
import { animate } from "animejs";

export const Navbar = ({ isScrolled }) => {


  const handleHover = (e) => {
    const target = e.currentTarget;
    const tip = target.querySelector(".nav_tip");
    const icon = target.querySelector("img");

    animate(tip, {
      opacity: 1,
      translateY: -10,
      duration: 300,
      easing: "easeInOutQuad",
    });

    animate(icon, {
      scale: 1.2,
      duration: 300,
      easing: "easeInOutQuad",
    });
  };
  const handleMouseLeave = (e) => {
    const target = e.currentTarget;
    const tip = target.querySelector(".nav_tip");
    const icon = target.querySelector("img");

    animate(tip, {
      opacity: 0,
      translateY: 0,
      duration: 300,
      easing: "easeInOutQuad",
    });

    animate(icon, {
      scale: 1,
      duration: 300,
      easing: "easeInOutQuad",
    });
  }

  return (
    <nav className={"custom_navbar " + (isScrolled ? "scrolled" : "")}>
      <div className="nav_icon"
        onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}

      >
        <a href="#">
          <img src="/public/home.svg" alt="Logo"></img>
        </a>
        <div className="nav_tip">Home</div>
      </div>
      <div className="nav_icon"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#">
          <img src="/public/services.svg" alt="Logo"></img>
        </a>
        <div className="nav_tip">Services</div>
      </div>
      <div className="nav_icon" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}

      >
        <a href="#">
          <img src="/public/connect.svg" alt="Logo"></img>
        </a>
        <div className="nav_tip">Connect</div>
      </div>
      <div className="nav_icon" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}

      >
        <a href="#">
          <img src="/public/docs.svg" alt="Logo"></img>
        </a>
        <div className="nav_tip">Docs</div>
      </div>
      <div className="nav_icon" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#">
          <img src="/public/search.svg"
          ></img>
        </a>
        <div className="nav_tip">Search</div>
      </div>
      <div className="nav_icon" onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <ThemeToggle>
          <a href="#">
            <img src="/public/sun.svg"
            ></img>
          </a>
          <div className="nav_tip">Mode</div>
        </ThemeToggle>
      </div>

    </nav>
  );
};
export default Navbar;
