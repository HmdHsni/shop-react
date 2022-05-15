import React from 'react';
import Wrapper from '../../Hoc/Wrapper';
import Controls from '../../components/Layout/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import order from '../../components/Order/Order';
import Order from '../../components/Order/Order';
 import axios from '../../axios-order';
import Loader from '../../components/UI/Loader/Loader';
import { Navigate } from 'react-router';


const prices={
    product1:20,product2:30,product3:40,product4:50
}
class shopping extends React.Component{
 
    state={
        products:{
            product1:0,
            product2:0,
            product3:0,
            product4:0,
        }
 ,
totalprice:0,
purchased:false,
loading:false
    }
    componentDidMount(){
        console.log(this.props)
        // axios.get('https://books-58490-default-rtdb.firebaseio.com/products.json')
        // .then((response)=>{
        //     this.setState({products:response.data})
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
    }
    purchasedHandler=()=>{
        this.setState({purchased:true})
    }
    addproductHandler=(type)=>{
        const prevCount=this.state.products[type]
        console.log(prevCount);
        const updatedCount=prevCount+1
        const updatedProducts={...this.state.products}
        updatedProducts[type]=updatedCount
        const priceAdd=prices[type]
        const preprice=this.state.totalprice
        const newPrice=preprice+priceAdd
        this.setState({totalprice:newPrice,products:updatedProducts})
    }
    RemoveproductHandler=(type)=>{
        const prevCount=this.state.products[type]
        const updatedCount=prevCount-1
        const updatedProducts={...this.state.products}
        updatedProducts[type]=updatedCount
        const pricesub=prices[type]
        const preprice=this.state.totalprice
        const newPrice=preprice-pricesub
        this.setState({totalprice:newPrice,products:updatedProducts})
        console.log("remove")
    }
    modalCloseHandler=()=>{
        this.setState({purchased:false})
    }
    purchasedContinueHandler=()=>{
      
      this.setState({loading:true})
        const order={
            products:this.state.products,
            price:this.state.totalprice,
            customer:{name:'jon',email:'jon@gmail.com'}
        }
        axios.post('/orders.json',order).then((response)=>{
            console.log(response);
            this.setState({loading:false , purchased:false})
        })
            .Catch((error)=>{
                 this.setState({loading:false , purchased:false})
                console.log(error);
            })
        
};

    render(){
        let order=
        <Order products={this.state.products}
      
      price={this.state.totalprice}
       continue={this.purchasedContinueHandler}
        cancell={this.modalCloseHandler}/>
         

          if(this.state.loading){
            order=<Loader/>
        }
        

    
        
    return(
        <Wrapper>
            <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}> 
            {order}
            </Modal>
            
            <Controls 
                productAdd={this.addproductHandler}
                productremove={this.RemoveproductHandler}
                price={this.state.totalprice}
                order={this.purchasedHandler}/>
    </Wrapper>
    )
    }
 
}
export default shopping;