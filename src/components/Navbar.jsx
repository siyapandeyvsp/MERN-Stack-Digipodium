import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/eventHandling" className="nav-link">
                Evet Handling
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/todo" className="nav-link">
                Todo
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/uploadpost" className="nav-link">
                Upload Post
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/feed" className="nav-link">
                Feed
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/users" className="nav-link">
                Show Users 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
