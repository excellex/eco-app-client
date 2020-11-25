import React from "react";
import style from "../Text.module.css";
import FindAdress from "../FindAdress";

function Clothing() {
  const props = { category: "КАТЕГОРИЯ", material: "clothing" };

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

export default Clothing;
