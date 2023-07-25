import Content from "./Content";
const Home = (props) => {
  const { produtos, addToCart, add } = props;
  return <Content produtos={produtos} addToCart={addToCart} add={add} />;
};
export default Home;
