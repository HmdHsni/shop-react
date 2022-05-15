import React from "react";
import './Controls.css';
import Builder from './Builder/Builder';

const Controls=(props)=>{
    const products=[
        {title:"محصول اول",type:"product1"},
        {title:"محصول دوم",type:"product2"},
        {title:"محصول سوم",type:"product3"},
        {title:"محصول چهارم",type:"product4"},
    ]
    return(
<div className="controls">
    <div className="price">
        <p>مجموع قیمت:{props.price}</p>
    </div>
   {products.map((item)=>{
       return <Builder
        key={item.title} title={item.title} 
       add={()=>props.productAdd(item.type)}
     remove={()=>props.productremove(item.type)} 
     />
      
   })}
   <button className="order-btn" onClick={props.order}>سفارش محصولات</button>
</div>
        )
}
      
    

export default Controls;