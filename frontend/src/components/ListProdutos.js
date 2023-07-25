import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:3333/v1/",
});

const ListProdutos = (props) => {
  const [produtos, setProdutos] = React.useState([]);

  const getData = () => {
    client
      .get("/produto", {
        withCredentials: true,
        crossOrigin: true,
      })
      .then((response) => {
        console.log(response.data.produtos);
        setProdutos(response.data.produtos);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onDelete = (id) => {
    console.log(id);
    client
      .delete(`/produto/${id}`, {
        withCredentials: true,
        crossOrigin: true,
      })
      .then((response) => {
        getData();
      });
  };

  return (
    <div>
      <div className="page-header">
        <h1 id="tables">Listar Produtos</h1>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => {
            return (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.estoque}</td>
                <td>
                  <Link
                    to="/produto/edit"
                    className="text-warning"
                    href="#!"
                    state={produto}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <a
                    href="#!"
                    className="text-danger"
                    onClick={() => onDelete(produto.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListProdutos;
