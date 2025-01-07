import React, { useContext, useState } from "react";
import { Context } from "../Context/Contextmain";
const Tablerow = ({ cartitem, index, removehandler }) => {
  const [Quantity, setQuantity] = useState(1);
 
 
  
   
  const inchandler = () => {
    setQuantity(Quantity + 1); 
  };

  const dechandler = () => {
    setQuantity(Quantity - 1);
    
    
  };
  return (
    <>
      <tr className="border  border-black">
        <td>{index + 1}</td>
        <td className="w-[100px]">
          <img width={100} src={cartitem.Image} alt="" />
        </td>
        <td>
          <button
            className="mr-2 border-black p-1 text-white bg-blue-500"
            onClick={inchandler}
          >
            +
          </button>
          {Quantity}
          <button
            className="ml-2 border-black py-1 px-1.5 text-white bg-blue-500"
            onClick={dechandler}
          >
            -
          </button>
        </td>
        <td>$ {Math.ceil(cartitem.price * Quantity)}</td>
        <td>
          <button
            onClick={() =>removehandler(index)}
            className="p-1 rounded bg-red-500 text-white "
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default Tablerow;
