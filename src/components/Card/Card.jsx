import { useDispatch, useSelector } from "react-redux";
import StarRating from "../Star/StarRating";
import "./card.css";
import { add } from "../../redux/actions/actionCreators";
import { useState } from "react";

function Card({ type, name, stars, price, offPrice, image }) {
  const dispatch = useDispatch();
  // const total = useSelector((state) => state.total);
  const [showMessage, setShowMessage] = useState(false);

  function handleClick(e) {
    // console.log(+e.target.parentElement.value);
    if (!isNaN(+e.target.parentElement.value)) {
      dispatch(add(+e.target.parentElement.value));
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 0.5 * 1000);
    }
  }

  return (
    <article>
      <button
        className="btn"
        type="button"
        id="addToCartBtn"
        onClick={handleClick}
        value={offPrice ? offPrice : price}
      >
        <i className="bi bi-bag-fill" id="iconAdd"></i>
      </button>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "236px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "236px",
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
        }}
      ></div>
      <div style={{ padding: "16px" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "rgb(93, 97, 103)",
          }}
        >
          {type}
        </span>
        <h6
          style={{
            marginBottom: "2px",
            fontSize: "15px",
          }}
        >
          {name}
        </h6>
        {/* stars */}
        <StarRating stars={stars} />
        {offPrice ? (
          <p className="price">
            <span style={{ textDecoration: "line-through", opacity: "0.5" }}>
              ${price}
            </span>{" "}
            ${offPrice}
          </p>
        ) : (
          <p className="price">${price}</p>
        )}
      </div>
      {showMessage && <p id="message">Plant added to basket shop!</p>}
    </article>
  );
}

export default Card;
