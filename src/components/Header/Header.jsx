import Cart from "../Cart/Cart";
import "./header.css";

function Header() {
  return (
    <section id="section-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid mt-3 responsive-nav">
          <span className="d-flex align-items-center" id="title">
            <img
              src="https://aps-plants-website.netlify.app/assets/APSDark-BHi096m8.png"
              alt="logo"
              width={"70px"}
              height={"40.21px"}
            />
            <h1 className="ms-3" style={{ fontWeight: 500, fontSize: "19px" }}>
              Simply Natural
            </h1>
          </span>
          <Cart />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ position: "absolute", right: "20%" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active link-danger"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ------ */}
      <div
        className="py-5"
        style={{
          marginLeft: "15%",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <h6 style={{ fontSize: "20px" }}>Best Quality Plants</h6>
        <h2>
          Amazing Variety
          <br />
          Of Plants Starting
          <br />
          Just $12
        </h2>
        <button
          type="button"
          className="btn rounded-5 shadow-lg"
          style={{ width: "150px", padding: "11.2px 32px" }}
          id="shopNow"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
}

export default Header;
