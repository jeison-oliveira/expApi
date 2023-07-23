import Card from "./Card";
import ShoppingCart from "./ShoppingCart";

const Content = (props) => {
  const { page, produtos, addToCart, removeFromCart, cartProducts } = props;
  console.log("Página: ", page);
  if (page === "home") {
    const cols = produtos.map((produto, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Card produto={produto} addToCart={addToCart} />
        </div>
      );
    });
    return <div className="row">{cols}</div>;
  } else if (page === "shoppingCart") {
    return (
      <div className="col">
        <ShoppingCart
          removeFromCart={removeFromCart}
          cartProducts={cartProducts}
        />
      </div>
    );
  }
};
export default Content;
