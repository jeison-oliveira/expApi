import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:3333/v1/",
});

const EditProduto = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [produto, setProduto] = React.useState(state);

  const handleInput = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const update = (e) => {
    e.preventDefault();
    console.log(produto);
    client.put(`/produto/${produto.id}`, produto).then((response) => {
      // setProduto(response.data);
      window.location.href = "/produto/list";
    });
  };

  // if (!produto) return "No post!";

  return (
    <div className="row">
      <div className="col-12-auto">
        <div className="page-header">
          <h1 id="tables">Alterar Produto</h1>
        </div>
        <div className="bs-component">
          <form>
            <div className="form-outline mb-4">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={produto.nome}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="preco">
                Preco
              </label>
              <input
                type="texto"
                id="preco"
                name="preco"
                value={produto.preco}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="preco">
                Estoque
              </label>
              <input
                id="estoque"
                min="0"
                name="estoque"
                value={produto.estoque}
                onChange={handleInput}
                type="number"
                className="form-control form-control-sm"
              />
            </div>
            <button onClick={update} className="btn btn-primary btn-block mb-4">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduto;
