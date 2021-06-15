import Product from "components/Product";

const Cart = ({ cart, removeFromCartHandler }) => {
  return (
    <div className="border h-100">
      CART
      {cart.map((element) => {
        return (
          <div className="col-5 border m-2" key={element.id}>
            <Product
              product={element}
              removeFromCartHandler={removeFromCartHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
