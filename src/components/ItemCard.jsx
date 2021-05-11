import React from "react";

const ItemCard = props => {
    return (
        <div>
            <div className="card">
                <h4>Name: {props.item.name}</h4>
                <h5>Price: {props.item.price}</h5>
                <h4>Category: {props.item.category}</h4>
            </div>
        </div>
    )
}

export default ItemCard;