import React from "react";

const Item = ({info}) => {
    return(
        <>
        <br />
        <h2 className="text-center text-danger">{info.nombre}</h2>
        <a href="" className="d-flex justify-content-center">
        <img src={info.img} alt="" />        
        </a>
        </>
    )
}

export default Item;