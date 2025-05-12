import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
if(isEmpty) return <h1 className='text-center'>your cart is empty</h1>

  return (
    <>
    <div className='row justify-content-center'>
    <div className='col-6'>
    <button onClick={()=>emptyCart()}>Empty cart</button>
    <h5>Cart:({totalUniqueItems}) Total Items:({totalItemsc})</h5>
    {/* <table border='2' align='center'> */}
    <table className='table table-light table-hover m-4'>
        <tbody>
            {
                items.map((item,index)=>{
                    return(
                        <tr key={index}> 
                            <td><img src={item.iimg} style={{height:"100px"}}></img></td>
                            <td>{item.id}</td>
                            <td>{item.iname}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button></td>
                            <td><button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button></td>
                            <td><button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove item</button></td>
                        </tr>
                    )
                })
            }
        </tbody>

    </table>
    </div>
    </div>
    </>
  )
}

export default Cart
