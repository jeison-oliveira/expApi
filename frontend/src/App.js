import { Component } from "react";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
class App extends Component {
  state = {
    page: "home",
    cartProducts: [],
  };

  // add = (produto) => {
  //   const { produtos } = this.state;
  //   this.setState({
  //     produtos: [...produtos, produto],
  //   });
  // };

  addToCart = (produto) => {
    const { cartProducts } = this.state;
    console.log("Produto adicionado ao carrinho ", produto);
    this.setState({
      cartProducts: [...cartProducts, produto],
    });
  };

  removeFromCart = (index) => {
    const { cartProducts } = this.state;
    this.setState({
      cartProducts: cartProducts.filter((produto, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container text-center">
          <Navbar />
          <Routes
            cartProducts={this.state.cartProducts}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            add={this.add}
          />
        </div>
      </div>
    );
  }
}
export default App;
