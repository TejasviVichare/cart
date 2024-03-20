
import './App.css';
import ProductList from './ProductList.js';
import React,{useState} from 'react';
import Footer from './Footer.js';
import AddItem from './AddItem.js';

function App() {
  const products = [
    {
      price : 99999,
      name :"Iphone 10s Max",
      quantity :0,
    },

    {
      price : 9999,
      name : "Redmi Note 10S Max",
      quantity : 0,
    }
  ]
const [productList , setProductList] = useState(products)
let [totalAmount , setTotalAmount] = useState(0);

 const  incrementQunatity = (index) =>{
       let newProductList = [...productList]
       let newtotalAmount = totalAmount;
       newProductList[index].quantity++
       newtotalAmount += newProductList[index].price
       setTotalAmount(newtotalAmount);
       setProductList(newProductList);  
  }
  const decreamentQuantity = (index) =>{
    let newProductList = [...productList]
    let newtotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity-- 
      newtotalAmount -= newProductList[index].price
    }
    else{
      newProductList[index].quantity = 0 ;
    } 
    setTotalAmount(newtotalAmount);
    setProductList(newProductList);  
  }

  const reset = () =>{
    let newProductList = [...productList]
    newProductList.map((products) =>{
      products.quantity = 0
    })
    setProductList(newProductList);
  }

  const removeItem = (index) =>{
    let newProductList = [...productList]
    let newtotalAmount = totalAmount;
    newtotalAmount = newtotalAmount - newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(totalAmount);
  } 

  const addItem = (name, price) =>{
    let newProductList = [...productList]
    newProductList.push({
      price:price,
      name:name,
      quantity:0     
    }) ;
    setProductList(newProductList);
  }

  return (
    <>
     <main className='container mt-5'>
      <AddItem  addItem={addItem} />
      <ProductList productList={productList}  incrementQunatity={incrementQunatity} decreamentQuantity={decreamentQuantity} removeItem={removeItem}/>
        
      <Footer totalAmount={totalAmount} reset={reset} />
     </main>
    </>
  );
}

export default App;
