import Product from "components/Product";
import { PRODUCTS } from "components/constants";

const Products = ({ addToCartHandler }) => {
  return (
    <div className="row">
      {PRODUCTS.map((element) => {
        return (
          <div className="col-5 border m-2" key={element.id}>
            <Product product={element} addToCartHandler={addToCartHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
