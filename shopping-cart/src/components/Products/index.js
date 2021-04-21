import Product from "components/Product";
import { PRODUCTS } from "constants";

const Products = () => {
  return (
    <div>
      PRODUCTS.forEach(
      {(element, index) => {
        <Product {...element} />;
      }}
      )
    </div>
  );
};

export default Products;
