import React from 'react'
import product from '../../assets/product'
function Image() {
const imageurl= product.url 
  return (
    <div style={{justifyContent:'center'}}>
    <img src={imageurl} alt="" className='dress' />
    </div>
  )
}

export default Image