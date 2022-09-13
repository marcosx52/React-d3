import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/itemDetail";

const juguete = {
    id: 1001,
    nombre: "Hot Wheels x3 Azul",
    precio: 500,
    categoria: "Vehiculos de juguete",
    img: "https://girodidacticolaplata.com.ar/wp-content/uploads/2020/07/Hot-Wheels-x3.jpg",
    description: "Hot Wheels es una marca de línea de automóviles de juguete a escala de la firma estadounidense de juguetes Mattel, introducida en 1968. Destaca por sus diseños llamativos y detalles en los automóviles. Estos juguetes son elaborados a presión con plástico y metal, así como con pintura que tiene acabados similares a los de los carros de producción y elaborados con base en los planos de distintos fabricantes.Hot Wheels Pack X3 Vehiculos Original Mattel Metal Coleccion Son todos diferentes , y no se eligen modelos se entregan los que tengamos en stock al momento de la compra"
  };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(juguete)
            },3000);
        })
        getData.then(res => setData(res));
    })

    return(
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;