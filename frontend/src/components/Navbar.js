import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#!">
          Loja Virtual
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produto
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="produto/create" className="dropdown-item" href="#!">
                    Cadastrar
                  </Link>
                </li>
                {/*
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#!">
                    Editar
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#!">
                    Deletar
                  </Link>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="produto/list" className="dropdown-item" href="#!">
                    Listar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                href="#!"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                href="#!"
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="carrinho"
                className="nav-link active"
                aria-current="page"
                href="#!"
              >
                Carrinho
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
