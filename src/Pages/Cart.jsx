import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Contextmain";
import Tablerow from "../Components/Tablerow";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useContext(Context);
  const { setcart } = useContext(Context);
  

  const removehandler = (index) => {
    const shalowcopy = [...cart];
    // console.log("first",shalowcopy)
    shalowcopy.splice(index, 1);
    // console.log("Second",shalowcopy)
    setcart([...shalowcopy]);
    toast.success("Item Deleted Sucessfully!!")
  };


  return (
    <>
      <div className="max-w-[1100px] my-5 relative mx-auto flex flex-col justify-between p-0 items-center">
        <table
          cellPadding="10px"
          className="border mx-auto border-black md:w-full sm:w-[200px] p-3   text-center"
        >
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
              Array.isArray(cart)
              &&
            cart.map((cartitem, index) => {
              return (
                <Tablerow
                  cartitem={cartitem}
                  index={index}
                  removehandler={removehandler}
                />
              );
            })}
          </tbody>
        </table>

       
      </div>
    </>
  );
};

// const Tablerow=({cartitem})=>{
//     return(
//         <tr key={index} className='border  border-black'>
//         <td>{index + 1}</td>
//         <td className='w-[100px]'>
//             <img width={100} src={cartitem.Image} alt="" />
//         </td>
//         <td>
//             <button className='mr-2 border-black p-1 text-white bg-blue-500'  onClick={()=> inchandler(index)}>+</button>
//             {Quantity}
//             <button className='ml-2 border-black py-1 px-1.5 text-white bg-blue-500' onClick={()=> dechandler(index)}>-</button>
//         </td>
//         <td>$ {Math.ceil(cartitem.price * Quantity)}</td>
//         <td>
//             <button  onClick={()=> removehandler(index)} className='p-1 rounded bg-red-500 text-white '>Remove</button>
//         </td>
//     </tr>
//     )
// }

export default Cart;
