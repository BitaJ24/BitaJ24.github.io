import products from "../../../Help/material/data.json";
import Card from "../Card/Card";
import "./products.css";
import { v4 as uuid } from "uuid";

function Products() {
  //   console.log(products);
  return (
    <section style={{ padding: "2rem 10rem", marginTop: "20px" }}>
      <div id="cards-container">
        {products.map((item) => (
          <Card
            type={item.type}
            name={item.name}
            stars={item.stars}
            price={item.price}
            offPrice={item.offPrice}
            image={item.src}
            key={uuid()}
            // id={uuid()}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
