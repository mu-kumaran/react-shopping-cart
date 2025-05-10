import { useCart } from 'react-use-cart'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const ItemCard = (props) => {
  const {addItem} = useCart()
  return (
    <div className="card p-0  m-2 overflow-hidden shadow" style={{width: "18rem"}}>
        <img src={props.img} class="card-img-top" alt="..."></img>
        <div className="card-body" align='center'>
            <h5 className="card-title">Item Code:{props.id}</h5>
            <h5 className="card-title">Item name:{props.title}</h5>
            <h5 className="card-title">Price ₹.{props.price} / kg</h5>
            <p className="card-text">Description:{props.desc}</p>
            <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add to cart</button> 
        </div>
    </div>
  )
}

export default ItemCard
