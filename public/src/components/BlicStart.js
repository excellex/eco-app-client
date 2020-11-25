import React from "react";
import { useHistory } from "react-router-dom";
function BlicStart(props) {
  const history = useHistory();
  return (
    <div>
      <button
        style={{ marginBottom: "10px" }}
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => history.push("/blic")}
      >
        Выбрать из вариантов
      </button>
      <br />
    </div>
  );
}

export default BlicStart;
