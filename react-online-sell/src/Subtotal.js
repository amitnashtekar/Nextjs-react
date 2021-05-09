import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotalPrice } from "./Reducer";
import { useStateContext } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateContext();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotalPrice(basket)}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({`${basket?.length} Items`}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
