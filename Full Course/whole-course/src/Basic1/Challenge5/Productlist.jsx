import React from 'react'

const Productlist = () => {
    const products=[
        {
            id:1,
            name:'Phone',
            price:'$699',
        },
        {
            id:1,
            name:'Laptop',
            price:'$1200',
        },
        {
            id:1,
            name:'MicroPhone',
            price:'$199',
        }
    ]
  return (
    <div>
      {
        products.map((product)=>(
            <div  key={product.id}>
                <h1>Name: {product.name}</h1>
                <h1>Price :{product.price}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Productlist
