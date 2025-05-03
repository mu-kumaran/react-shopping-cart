import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const ItemCard = (props) => {
  return (
    <div className="card p-0  m-2 overflow-hidden shadow" style={{width: "18rem"}}>
        <img src={props.data.iimg} class="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">Item Code:{props.data.ino}</h5>
            <h5 className="card-title">Item name:{props.data.iname}</h5>
            <h5 className="card-title">Price ₹.{props.data.price} / kg</h5>
            <p className="card-text">Description:{props.data.description}</p>
            <button className="btn btn-primary">Add to cart</button>
        </div>
    </div>
  )
}

export default ItemCard
