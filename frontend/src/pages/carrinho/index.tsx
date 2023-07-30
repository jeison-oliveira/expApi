import { useDispatch, useSelector } from "react-redux";
import NavBarCustom from "../../components/navbar";
import { RootState } from "../../redux/store";
import "./index.css";
import {
  ProdutoCart,
  addQuantidade,
  removeFromCart,
  subQuantidade,
} from "../../redux/slices/carrinho.slice";

export default function Carrinho() {
  const dispatch = useDispatch();

  const carrinho = useSelector((state: RootState) => state.carrinho);

  const precoTotal = carrinho.produtos.reduce(
    (acum, produto) => acum + produto.preco * produto.quantidade,
    0
  );

  function addQty(produto: ProdutoCart) {
    if (produto.quantidade < produto.estoque) {
      dispatch(addQuantidade(produto));
    } else {
      alert("Quantidade acima do disponível: " + produto.estoque);
    }
  }

  return (
    <div className="container" style={{ justifyContent: "start" }}>
      <div style={{ width: "100%" }}>
        <NavBarCustom />
      </div>

      <div style={{ overflow: "scroll", height: "500px" }}>
        {/* <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5"> */}
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Carrinho de Compras</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              {carrinho.produtos.length > 0 ? (
                carrinho.produtos.map((produto, index) => {
                  return (
                    <div className="card rounded-3 mb-4 text-center">
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-3">
                            <img
                              src="https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg"
                              className="img-fluid rounded-3"
                              alt={produto.nome}
                            />
                          </div>
                          <div className="col-md-3">
                            <p className="lead fw-normal mb-2">
                              {produto.nome}
                            </p>
                          </div>
                          <div className="col-md-2">
                            <p className="lead fw-normal mb-2">
                              {produto.preco}
                            </p>
                          </div>
                          <div className="col-md-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => dispatch(subQuantidade(produto))}
                            >
                              <i className="bi bi-dash-circle-fill"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={produto.quantidade}
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={() => addQty(produto)}
                            >
                              <i className="bi bi-plus-circle-fill"></i>
                            </button>
                          </div>
                          <div className="col-md-1">
                            <h5 className="mb-0">
                              {produto.preco * produto.quantidade!}
                            </h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a
                              href="#!"
                              className="text-danger"
                              onClick={() => dispatch(removeFromCart(produto))}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md col-lg col-xl">
                        Seu carrinho está vazio
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input
                    type="text"
                    id="form1"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1">
                    Discound code
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg ms-3"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                Preço Total: {precoTotal}
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </section> */}
      </div>
    </div>
  );
}
