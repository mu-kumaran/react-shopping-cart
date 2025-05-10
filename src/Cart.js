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
    <button onClick={()=>emptyCart()}>Empty cart</button>
    <table border='2' align='center'>
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
                        </tr>
                    )
                })
            }
        </tbody>

    </table>
    </>
  )
}

export default Cart
