import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,Routes,useNavigate
  } from "react-router-dom";
import Checkout from "./containers/checkout/Checkout";

import Layout from './components/Layout/Layout';
 import Shopping from './containers/Shopping/Shopping';



class App extends React.Component{
    render(){
        return(
         <div className="app">
        <Router>
                  <Layout>   
                 
                  <Routes>
                  <Route path="/" element={ <Shopping/>  }/>
                  <Route path="/Checkout" exact element={<Checkout/>}/>
                 
                  </Routes>
                  </Layout>
         </Router>
                    </div>
        )
    }
}
export default App;