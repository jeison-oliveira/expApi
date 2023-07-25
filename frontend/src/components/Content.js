import Card from "./Card";
import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "http://localhost:3333/v1/",
});

const Content = (props) => {
  const { addToCart } = props;

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    client
      .get("/produto", {
        withCredentials: true,
        crossOrigin: true,
      })
      .then((response) => {
        console.log(response.data.produtos);
        setProdutos(response.data.produtos);
      });
  }, []);

  const cols = produtos.map((produto, index) => {
    return (
      <div className="col-sm-4" key={index}>
        <Card produto={produto} addToCart={addToCart} />
      </div>
    );
  });
  return <div className="row">{cols}</div>;
};
export default Content;
