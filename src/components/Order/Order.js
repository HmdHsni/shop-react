import React from "react";
import Wrapper from "../../Hoc/Wrapper";
import Button from "../UI/Button/Button";
const Order=(props)=>{
const summary=Object.keys(props.products).map((item)=>{
    return(<li key={item}>{item}:
                        {props.products[item]}</li>
                        )
})

    return(
        <Wrapper>
            <h3>سفارش</h3>
            <ul>{summary}</ul>
            <p>مجموع قیمت :{props.price}</p>
            <p>ادامه میدهید؟</p>
            <Button btnType="succes" click={props.continue}>بله </Button>
            <Button btnType="danger" click={props.cancell}>خیر</Button>
        </Wrapper>
    )
}
export default Order;