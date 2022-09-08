import Item from "../Item/item";
import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(auto => <Item key={auto.id} info={auto} />)
    );
}

export default ItemList;