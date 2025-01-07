import React, { createContext, useEffect, useState } from 'react';

const Context=createContext();
import { ToastContainer } from 'react-toastify';

const Contextmain = (props) => {

    const[cart,setcart]=useState([]);

//    console.log(cart.length==0);

    const carthandler=(prod_details)=>{
      setcart([...cart,prod_details])
    }

    useEffect(
        ()=>{
            if(cart.length == 0){
              return
            }
                localStorage.setItem("cart",JSON.stringify(cart))
            
        },
        [cart]
    )

    useEffect(
        ()=>{
            const lsCart=localStorage.getItem("cart");
            
            if(lsCart){
                setcart(JSON.parse(lsCart))
                // convert json string to array;
            }
        },[]
    )

    return (
        <Context.Provider value={
            {
                cart,carthandler,setcart
            }
        }>
            <ToastContainer/>
            {props.children}
        </Context.Provider>
    );
}

export default Contextmain;

export {Context};
