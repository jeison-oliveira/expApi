import { createSlice } from "@reduxjs/toolkit";

export interface ProdutoCart {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
  quantidade: number;
}

interface CarrinhoState {
  produtos: ProdutoCart[];
}

const initialState: CarrinhoState = {
  produtos: [],
};

export const carrinhoSlice = createSlice({
  name: "carrinhoSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.produtos = [];
      const produto = state.produtos.find(
        (produto) => produto.id === action.payload.id
      );
      if (produto) {
        if (produto.quantidade < produto.estoque) {
          produto.quantidade += 1;
        }
      } else {
        state.produtos.push({ ...action.payload, quantidade: 1 });
      }
    },
    removeFromCart(state, action) {
      // state.produtos = [];
      const indiceProduto = state.produtos.findIndex(
        (produto) => produto.id === action.payload.id
      );
      if (indiceProduto !== -1) {
        state.produtos.splice(indiceProduto, 1);
      }
    },
    subQuantidade(state, action) {
      const produto = state.produtos.find(
        (produto) => produto.id === action.payload.id
      );
      if (produto) {
        if (produto.quantidade > 1) {
          produto.quantidade -= 1;
        }
      }
    },
    addQuantidade(state, action) {
      const produto = state.produtos.find(
        (produto) => produto.id === action.payload.id
      );
      if (produto) {
        produto.quantidade += 1;
      }
    },
  },
});

export const { addToCart, subQuantidade, addQuantidade, removeFromCart } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
