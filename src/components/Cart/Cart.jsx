import "./cart.css";
import { useSelector } from "react-redux";

function Cart() {
  const count = useSelector((state) => state.count);
  const total = useSelector((state) => state.total);
  return (
    <span id="cart">
      ${total.toFixed(2)}{" "}
      <span>
        <i
          className="bi bi-cart3"
          style={{
            position: "relative",
          }}
        ></i>
        <span
          style={{
            backgroundColor: "rgb(211, 47, 47)",
            color: "white",
            borderRadius: "10px",
            height: "18px",
            minWidth: "18px",
            fontSize: "0.75rem",
            padding: "0px 6px",
            fontWeight: "500",
            position: "absolute",
            top: "-5px",
            right: "-15px",
          }}
        >
          {count}
        </span>
      </span>
    </span>
  );
}

export default Cart;
