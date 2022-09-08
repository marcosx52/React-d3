import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cant, setCant] = useState(initial);

  const disminuir = () => {
    setCant(cant - 1);
  };

  const aumentar = () => {
    setCant(cant + 1);
  };

  return (
    <>
      <div class="d-flex justify-content-evenly">
        <button
          disabled={cant <= 1}
          type="button"
          class="btn btn-danger"
          onClick={disminuir}
        >
          {" "}
          -{" "}
        </button>
        <h3> {cant} Unidad </h3>
        <button
          disabled={cant >= stock}
          type="button"
          class="btn btn-primary"
          onClick={aumentar}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <button
        disable={stock <= 0}
        onClick={() => onAdd(cant)}
        type="button"
        class="btn btn-primary"
      >
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
