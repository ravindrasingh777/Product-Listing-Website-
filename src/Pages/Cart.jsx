import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../Context/Contextmain';

const Cart = () => {

    const {cart}=useContext(Context);
    const{setcart}=useContext(Context);
    console.log(cart)

    const[Quantity,setQuantity]=useState(1);

    function inchandler(index){
        setQuantity(Quantity + 1)
    }

    function dechandler(){
        setQuantity(Quantity - 1)
    }



    const removehandler=(index)=>{
        const shalowcopy=[...cart];
        shalowcopy.splice(index,1);
        setcart(shalowcopy);

    }

    return (
        <>
         <div className='max-w-[1100px] my-5 relative mx-auto flex justify-between p-0 items-center'>
            <table width="100%" cellPadding="10px" className='border mx-auto border-black md:w-full   text-center'>
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   {
                    cart?.map(
                        (cartitem,index)=>{
                            return(
                              <Tablerow removehandler={removehandler} Quantity={Quantity} inchandler={inchandler} dechandler={dechandler} index={index} cartitem={cartitem}/> 
                            )
                        }
                    )
                   }
                </tbody>
            </table>
            </div>

           
        </>
    );
}

const Tablerow=({cartitem, index,inchandler,dechandler,Quantity,removehandler})=>{
    return(
        <tr key={index} className='border  border-black'>
        <td>{index + 1}</td>
        <td className='w-[100px]'>
            <img width={100} src={cartitem.Image} alt="" />
        </td>
        <td>
            <button className='mr-2 border-black p-1 text-white bg-blue-500'  onClick={()=> inchandler(index)}>+</button>
            {Quantity}
            <button className='ml-2 border-black py-1 px-1.5 text-white bg-blue-500' onClick={()=> dechandler(index)}>-</button>
        </td>
        <td>${cartitem.price * Quantity}</td>
        <td>
            <button  onClick={()=> removehandler(index)} className='p-1 rounded bg-red-500 text-white '>Remove</button>
        </td>
    </tr>
    )
}




export default Cart;
