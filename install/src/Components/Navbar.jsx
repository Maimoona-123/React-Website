import React from "react";

function Navbar(){
    return <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 fw-semibold mb-1 ms-5" href="#">
      Realme
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold fs-6 ">
        <li className="nav-item">
          <a className="nav-link active p-3" aria-current="page" href="#">
            Realme smartphone
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-3" href="#">
            narzo smartphone
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link p-3" href="#">
            Audio
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link p-3" href="#">
            Accessories
          </a>
        </li>

        <li className="nav-item ">
          <a className="nav-link p-3" href="#">
            Brand
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link p-3" href="#">
             Support
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link p-3" href="#">
            Community
          </a>
        </li>
        </ul>
    </div>
  </div>
</nav>

}

export default Navbar;