import React from 'react'
const Cart1=()=>{
    const items=['Wireless Earbuds','Power Bank','New SSO','Hoodie']
    return <div>
    <h1>
        Cart
        </h1>
        {items.length> 0 && <h2>You have {items.length} items in your cart</h2>}
        </div>
}

const Cart = () => {
  return (
    <div>
      <Cart1 />
      <h1>This is Ameer Hamza</h1>
    </div>
  )
}

export default Cart
