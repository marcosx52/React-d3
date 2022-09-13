import React from "react";

export const ItemDetail = ({data}) => {
    return(
        <div className="card">
            <div className="card-body">
                <img className="" src={data.img} alt="" />
                <div className="">
                    <h1 className="card-title d-block p-2 bg-primary text-white">{data.nombre}</h1>
                    <br />
                    <h6 className="d-block p-2 bg-dark text-white">Información del Producto</h6>
                    <br />
                    <p className="card-text">{data.description}</p>
                    <a href="" class="btn btn-primary">Comprarlo</a>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;