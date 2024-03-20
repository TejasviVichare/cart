import React from 'react';
import  Product from './Product.js';

export default function ProductList(props){
    return(

        props.productList.length > 0 ?  
       props.productList.map((product, i) =>{
          return <Product product={product} key={i} incrementQunatity={props.incrementQunatity} index={i} decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem}/>
         }) 
         : <h1>No products Exists in the cart</h1>
    )
}