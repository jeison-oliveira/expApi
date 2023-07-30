import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "reactstrap";
import { addToCart } from "../redux/slices/carrinho.slice";
import { RootState } from "../redux/store";
import { Produto } from "../redux/slices/api.slice.produtos";

export default function CardProdutosList() {
  const dispatch = useDispatch();

  const { produtos } = useSelector((state: RootState) => state.apiProduto);
  const carrinho = useSelector((state: RootState) => state.carrinho);

  function inserirCarrinho(produto: Produto) {
    const produtoExist = carrinho.produtos.find(
      (prod) => prod.id === produto.id
    );
    if (produtoExist) {
      if (produtoExist.quantidade < produtoExist.estoque) {
        dispatch(addToCart(produto));
      } else {
        alert("Quantidade acima do disponível: " + produto.estoque);
      }
    } else {
      dispatch(addToCart(produto));
    }
  }

  return (
    <div className="row">
      {produtos.map((produto, index) => {
        return (
          <div className="col-sm-4" key={index}>
            <div className="card">
              <img
                src="https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">Preço: {produto.preco}</p>
                <p className="card-text">Estoque: {produto.estoque}</p>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => inserirCarrinho(produto)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
