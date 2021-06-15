import gold from "assets/images/gold.png";
import green from "assets/images/green.png";
import grey from "assets/images/grey.png";
import silver from "assets/images/silver.png";

const Product = ({ product, addToCartHandler, removeFromCartHandler }) => {
  const imageMapping = {
    "gold.png": gold,
    "green.png": green,
    "grey.png": grey,
    "silver.png": silver,
  };

  let actionButton = null;
  if (addToCartHandler) {
    actionButton = (
      <button
        onClick={() => {
          addToCartHandler(product.id);
        }}
      >
        Add To Cart
      </button>
    );
  } else if (removeFromCartHandler) {
    actionButton = (
      <button
        onClick={() => {
          removeFromCartHandler(product.id);
        }}
      >
        Remove
      </button>
    );
  }

  return (
    <div className="row">
      <div className="col-4">
        <img src={imageMapping[product.image]} className="mw-100 mh-100" />
      </div>
      <div className="col">
        <h3>{product.name}</h3>
        <h4>
          ${product.price}({product.storage})
        </h4>
        {actionButton}
      </div>
    </div>
  );
};

export default Product;
