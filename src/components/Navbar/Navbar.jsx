import React from "react";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
           
            Playroom Jugueteria
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="pages/nosotros.html"
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/carrito.html">
                  <CartWidget/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/contacto.html">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;