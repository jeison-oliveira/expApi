import { useDispatch, useSelector } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/api.slice.login";
import { NavItem, NavLink } from "react-bootstrap";

export default function NavBarCustom() {
  const navigate = useNavigate();

  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  const { produtos } = useSelector((state: RootState) => state.carrinho);
  const dispatch = useDispatch();

  function Logout() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <div className="col-12">
      <Navbar
        className="navbar navbar-dark bg-dark text-white"
        style={{ position: "sticky", top: "0" }}
      >
        <NavbarBrand>Loja Online</NavbarBrand>

        <NavItem onClick={() => navigate("/home")}>
          <NavLink>Produtos</NavLink>
        </NavItem>

        {/* SE USUARIO ISADMIN MOSTRA OPÇÃO DO CARRINHO */}
        {!isAdmin ? (
          <NavItem
            onClick={() => navigate("/cart")}
            className="position-relative"
          >
            <NavLink>
              Carrinho
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {produtos.length}
              </span>
            </NavLink>
          </NavItem>
        ) : null}

        <NavItem onClick={() => Logout()}>
          <NavLink>Logout</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}
