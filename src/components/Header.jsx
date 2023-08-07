import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white py-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={"image_interview_react/edafacelogo.80662ebeea5c38cca3b5.png"}
            height={"50px"}
          />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0  ">
            <li className="nav-item ">
              <a className="nav-link text-primary-emphasis" href="#">
                Art
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-primary-emphasis" href="#">
                Collectible
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-primary-emphasis" href="#">
                Gaming
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-primary-emphasis" href="#">
                Explore
              </a>
            </li>
          </ul>
          <form className="d-flex flex-fill p-1" role="search">
            <input
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search items..."
              aria-label="Search"
            />
            <button className="btn btn-primary ms-2 w-25" type="submit">
              Create
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-regular fa-circle-user fa-xl text-primary-emphasis"></i>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa-regular fa-solid fa-wallet fa-xl text-primary-emphasis"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
