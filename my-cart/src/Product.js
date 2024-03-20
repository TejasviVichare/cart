import React from 'react';


export default function Product(props){
    return (
        <div className='row m-3'>
            <div className='col-5'>
                <h3 className='m-3'>{props.product.name} <span className="badge bg-secondary">₹{props.product.price}</span></h3>
            </div>

            <div className='col-3 '>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger" onClick={ () =>{props.decreamentQuantity(props.index)}}>-</button>
                    <button type="button" class="btn btn-warning">{props.product.quantity}</button>
                    <button type="button" class="btn btn-success"  onClick={  () =>{props.incrementQunatity(props.index)}}>+</button>
                </div>
            </div>

            <div className='col-2'>
                    {props.product.quantity * props.product.price}
            </div>
            <div className='col-2 '>
            <button className='btn btn-danger' onClick={() =>{
                props.removeItem(props.index);
            }}>
                Remove
            </button>
            </div>
        </div>
    )
}