import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "http://localhost:3333/v1/",
});

const CreateProduto = (props) => {
  const [produto, setProduto] = React.useState({
    nome: "",
    preco: 0,
    estoque: 0,
  });

  const handleInput = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const createProduto = (e) => {
    e.preventDefault();
    console.log(produto);
    client.post("/produto", produto).then((response) => {
      // setProduto(response.data);
      window.location.href = "/produto/list";
    });
  };

  // if (!produto) return "No post!";

  return (
    <div className="row">
      <div className="col-12-auto">
        <div className="page-header">
          <h1 id="tables">Adicionar Produto</h1>
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
            <button
              onClick={createProduto}
              className="btn btn-primary btn-block mb-4"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduto;
