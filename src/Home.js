import React from 'react'
import data from './Data'
import ItemCard from './ItemCard'

const Home = () => {
  return (
    <>
    <div className='row justify-content-center'>
    {
        data.productdata.map((item)=>
            <ItemCard data={item}></ItemCard>
        )
    }
    </div>
    {/* {data.productdata.map((item)=><>
        {item.ino}
        {item.iname}
        <img src={item.iimg} width="150px" alt='path not found'></img>
        {item.price}
        {item.description}
        <br></br>
    </>)} */}
    </>
  )
}

export default Home
