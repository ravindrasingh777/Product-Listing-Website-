import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../Context/Contextmain';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useRef } from 'react';
const Container = () => {
    const {cart}=useContext(Context)
   const[overlaycheck,setoverlaycheck]=useState(false);
    const overlayref=useRef();

    const overlay=()=>{
        setoverlaycheck(false);
    }

    

    return (
        <>
            <div className={`max-w-[1100px] ${overlaycheck == true && "relative"}  mx-auto flex justify-between p-2 items-center`}>
            <div className='text-2xl font-bold'>MyStore</div>
           
            <div >
           <div>
           <IoMdMenu className={`${overlaycheck == true && "hidden"} , md:hidden`} onClick={()=> setoverlaycheck(true)} />
           <RxCross2 className={`${overlaycheck == false && "hidden"} , md:hidden`} onClick={overlay} />
           </div>
                <ul ref={overlayref} className={`md:flex md:p-0 p-2 md:bg-white  bg-blue-400 md:static absolute top-[52px] right-0 md:w-full   ${overlaycheck == true && "h-screen w-[200px] text-xl right-[-10px] font-semibold"}   gap-4 text-lg ${overlaycheck == false ? "hidden" : "block"}` } >
                    <li className='md:mt-0 mt-2' ><Link to="/">Home</Link></li>
                    <li className='md:mt-0 mt-2' ><Link to="/store">Store</Link></li>
                    <li className='md:mt-0 mt-2' ><Link to="/cart">Cart ({cart.length})</Link></li>
                    <li className='md:mt-0 mt-2' ><Link to="/contact">About Us</Link></li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default Container;
