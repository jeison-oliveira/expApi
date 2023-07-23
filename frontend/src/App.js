import { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
class App extends Component {
  state = {
    page: "home",
    cartProducts: [],
  };

  setPage = (page) => {
    console.log(page);
    this.setState({
      page: page,
    });
  };

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
    const produtos = [
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
      {
        name: "Pão de Queijo",
        price: "R$ 5,99/kg",
        url: "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg",
      },
    ];
    return (
      <div className="container text-center">
        <Navbar setPage={this.setPage} />
        <Content
          page={this.state.page}
          produtos={produtos}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          cartProducts={this.state.cartProducts}
        />
      </div>
    );
  }
}
export default App;
