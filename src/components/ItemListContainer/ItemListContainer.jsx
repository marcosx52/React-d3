import React from "react";
import Title from "../Title/title";
import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer() {


    const onAdd = (quantity) => {
      alert(`Compraste ${quantity} unidades`);
    }

    return (
      <>
    <main className="cont-nosotros p-3 bd-highlight">
          <div>
        <h1 className="nos-title text-center">¡Bienvenidos a Playroom!</h1>
        <h3 className="nos-p text-center">
        <br />
          <Title greeting="Contador" />
        <br />
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </h3>
       
      </div>
      
    </main>

      </>
    );
  }
  
  export default ItemListContainer;