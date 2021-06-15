import Products from "components/Products";
import Cart from "components/Cart";

const Catalog = ({
  cart,
  addToCartHandler,
  removeFromCartHandler,
  placeOrderHandler,
}) => {
  return (
    <div className="row">
      <div className="col-8">
        <Products addToCartHandler={addToCartHandler} />
      </div>
      <div className="col">
        <Cart cart={cart} removeFromCartHandler={removeFromCartHandler} />
        <button onClick={placeOrderHandler}> Order </button>
      </div>
    </div>
  );
};

export default Catalog;
