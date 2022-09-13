import React, {useEffect, useState} from "react";
import Title from "../Title/title";
//import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";

const autos = [
  {
    id: 1001,
    nombre: "Hot Wheels x3 Azul",
    precio: 500,
    categoria: "Vehiculos de juguete",
    img: "https://girodidacticolaplata.com.ar/wp-content/uploads/2020/07/Hot-Wheels-x3.jpg",
    description: "Hot Wheels Pack X3 Vehiculos Original Mattel Metal Coleccion Son todos diferentes , y no se eligen modelos se entregan los que tengamos en stock al momento de la compra"
  },
  {
    id: 1002,
    nombre: "Hot Wheels x3 Amarrillo",
    precio: 600,
    categoria: "Vehiculos de juguete",
    img: "https://girodidacticolaplata.com.ar/wp-content/uploads/2020/07/Hot-Wheels-x3.jpg",
    description: "Hot Wheels Pack X3 Vehiculos Original Mattel Metal Coleccion Son todos diferentes , y no se eligen modelos se entregan los que tengamos en stock al momento de la compra"
  },
  {
    id: 1003,
    nombre: "Hot Wheels x3 Rojo",
    precio: 700,
    categoria: "Vehiculos de juguete",
    img: "https://girodidacticolaplata.com.ar/wp-content/uploads/2020/07/Hot-Wheels-x3.jpg",
    description: "Hot Wheels Pack X3 Vehiculos Original Mattel Metal Coleccion Son todos diferentes , y no se eligen modelos se entregan los que tengamos en stock al momento de la compra"
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data,setData] = useState([]);

  useEffect(() =>{
const getData = new Promise(resolve => {
  setTimeout(() => {
    resolve(autos);
  },2000);
});
  getData.then(res => setData(res));

  },[])

    const onAdd = (quantity) => {
      alert(`Compraste ${quantity} unidades`);
    }

    return (
      <>
    <main className="">
          <div>
        <h1 className="nos-title text-center">¡Bienvenidos a Playroom!</h1>
        <h3 className="">
       {/*  <br />
          {Title greeting="Contador" />}
        <br />
        { <ItemCount stock={5} initial={1} onAdd={onAdd} /> */} 
        </h3>
        <div>
        <ItemList data={data} /> 
        </div>
       
      </div>
      
    </main>

      </>
    );
  }
  
  export default ItemListContainer;