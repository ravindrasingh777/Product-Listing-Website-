import React, { createContext, useEffect, useState } from 'react';
import { stringify } from 'postcss';
const Context=createContext();

const Contextmain = (props) => {

    const[cart,setcart]=useState([]);

    const carthandler=(prod_details)=>{
       
        setcart([...cart,prod_details]);
    }

    useEffect(
        ()=>{
            if(cart.length == 0){
              return
            }else{
                localStorage.setItem("cart",JSON.stringify(cart))
            }
        },
        [cart]
    )

    useEffect(
        ()=>{
            const lsCart=localStorage.getItem("cart");
            if(lsCart != ""){
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
            {props.children}
        </Context.Provider>
    );
}

export default Contextmain;

export {Context};
