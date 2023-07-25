import { Routes as RoutesDom, Route } from "react-router-dom";
import Home from "./Home";
import CreateProduto from "./CreateProduto";
import ShoppingCart from "./ShoppingCart";
import ListProdutos from "./ListProdutos";
import EditProduto from "./EditProduto";

const Routes = (props) => {
  const { addToCart, cartProducts, removeFromCart } = props;
  return (
    <RoutesDom>
      <Route index element={<Home addToCart={addToCart} />} />
      <Route path="/produto/create" element={<CreateProduto />} />
      <Route path="/produto/list" element={<ListProdutos />} />
      <Route path="/produto/edit" element={<EditProduto />} />
      <Route
        path="carrinho"
        element={
          <ShoppingCart
            cartProducts={cartProducts}
            removeFromCart={removeFromCart}
          />
        }
      />
    </RoutesDom>
  );
};
export default Routes;
