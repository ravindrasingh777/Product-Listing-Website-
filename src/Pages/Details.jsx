import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/Contextmain';
const Details = () => {

  const{carthandler}=useContext(Context);

    const {Product_id}=useParams();
    const[product,setProduct]=useState(null);
    const[Loader,setLoader]=useState(false);

    const fetchProduct=()=>{
      setLoader(true)
        axios.get(`https://dummyjson.com/products/${Product_id}`)
        .then(
            (response)=>{
                setLoader(false)
                setProduct(response.data);
            }
        )
    }

    useEffect(
        ()=>{
            fetchProduct();
        },
        [Product_id]
    )


    return (

      

        <div className="container mx-auto p-6">

         {
           Loader == true
           ?<>
           <div className="animate-pulse mx-auto w-[800px] h-[500px] space-y-4 p-4 bg-gray-200 rounded-lg">
               {/* Skeleton Image */}
               <div className="h-48 bg-gray-300 rounded"></div>

               {/* Skeleton Text */}
               <div className="space-y-2">
                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                 <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                 <div className="h-4 bg-gray-300 rounded w-full"></div>
               </div>
             </div>
           </>
           :
           <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Section */}
            <div>
              <img 
                src={product?.images[0]}
                // src={product?.thumbnail}
                alt={product?.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
    
            {/* Product Details Section */}
            <div className='col-span-2'>
              <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <div className="mb-4">
                <span className="text-2xl font-semibold text-green-600">${product?.price}</span>
                <span className="ml-2 text-gray-500 text-sm line-through">
                  {/* ${(product?.price / (1 - product.discountPercentage / 100)).toFixed(2)} */}
                </span>
                <span className="ml-2 text-sm text-red-500">
                  ({product?.discountPercentage}% off)
                </span>
              </div>
    
              <p className="text-gray-600 mb-2">Brand: {product?.brand}</p>
              <p className="text-gray-600 mb-2">SKU: {product?.sku}</p>
              <p className={`mb-4 ${product?.availabilityStatus === "Low Stock" ? "text-red-500" : "text-green-600"}`}>
                {product?.availabilityStatus}
              </p>
    
              <button onClick={()=>carthandler({id:Product_id, Image:product.thumbnail,price:product.price})} className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
           </>
         }

         
    
          {/* Additional Information */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <p className="text-gray-600 mb-2">Warranty: {product?.warrantyInformation}</p>
            <p className="text-gray-600 mb-2">Shipping: {product?.shippingInformation}</p>
            <p className="text-gray-600 mb-2">Return Policy: {product?.returnPolicy}</p>
            <p className="text-gray-600">
              {/* {/* Dimensions: {product?.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm */} */
            </p>
          </div>
    
          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="space-y-4">
              {product?.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <p className="text-gray-800 font-semibold">
                    {review.reviewerName}
                  </p>
                  <p className="text-sm text-yellow-500 mb-2">
                    {"⭐".repeat(review.rating)}
                  </p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Details;
