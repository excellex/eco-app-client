import React from "react";
import FindAdress from "../FindAdress";
import style from "../Text.module.css";

function Products() {
  const props = { category: "КАТЕГОРИЯ", material: "products" };

  return (
    <div>
      <FindAdress props={props} />
      <br />
      <div className={style.text}>
        <p>Спасибо!</p>
      </div>
    </div>
  );
}

export default Products;
