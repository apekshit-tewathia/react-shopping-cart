import Product from "components/Product";
import _ from "lodash";
import { trigger } from "components/events";

const OrderSummary = ({ order }) => {
  return (
    <div className="row">
      {order.map((element) => {
        return (
          <div className="col-5 border m-2" key={element.id}>
            <Product product={element} />
          </div>
        );
      })}
      <button
        onClick={() => {
          trigger("bookAgain");
        }}
      >
        Book Again
      </button>
      Total Items: {order.length}
      Total: $
      {_.sumBy(order, (product) => {
        return parseFloat(product.price);
      })}
    </div>
  );
};

export default OrderSummary;
