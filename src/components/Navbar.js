import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "./static/chat-square-heart.svg"

const Navbar = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top navbar-custom">
      <a href="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use src={logo}></use></svg>
        <span class="fs-4">Amy Nguyen</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/home" class="nav-link" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/projects" class="nav-link">Projects</a></li>
        <li class="nav-item"><a href="/resume" class="nav-link">Resume</a></li>
      </ul>
    </header>
  );
};

export default Navbar;
