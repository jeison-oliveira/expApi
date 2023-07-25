const Card = (props) => {
  const { produto, addToCart } = props;
  return (
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
          className="btn btn-primary"
          onClick={() => addToCart(produto)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};
export default Card;
