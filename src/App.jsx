import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;
