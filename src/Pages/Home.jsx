import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/Contextmain';
const Home = () => {

    const {carthandler}=useContext(Context);

    const FeaturedItems=[{
        id: 14,
        title: "Knoll Saarinen Executive Conference Chair",
        description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        category: "furniture",
        price: 499.99,
        discountPercentage: 15.23,
        rating: 4.11,
        stock: 47,
        tags: [
        "furniture",
        "office chairs"
        ],
        brand: "Knoll",
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
        },
        {
            id: 78,
            title: "Apple MacBook Pro 14 Inch Space Grey",
            description: "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
            category: "laptops",
            price: 1999.99,
            rating: 3.13,
            thumbnail: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
            },
            {
                id: 1,
                title: "Essence Mascara Lash Princess Eyeliner",
                description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                category: "beauty",
                price: 9.99,
                discountPercentage: 7.17,
                rating: 4.94,
                stock: 5,
                tags: [
                "beauty",
                "mascara"
                ],
                brand: "Essence",
                thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                }
        ]

  return (
    <div className="bg-gray-100 min-h-screen">
     
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:font-bold  mb-4">Welcome to MyStore</h2>
          <p className="text-lg mb-6">Find the best deals on your favorite products!</p>
          <Link to="/store"  className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100">Shop Now</Link>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-16">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h3>
        <div className="container md:flex  justify-evenly mx-auto px-6">
         {
            FeaturedItems.map(
                (item,index)=>{
                    return(
                        <div key={index} className="w-[350px]  mt-5 gap-6">
                        {/* Product Card */}
                        <div className="bg-white shadow-md  rounded-lg overflow-hidden">
                            <Link to={`/details/${item.id}`}><div className='flex justify-center items-center'>
                          <img  src={item.thumbnail} alt="Product" className="w-[150px]  h-48 object-cover" />
                          </div></Link>
                          <div className="p-4  flex flex-col items-center">
                            <h4 className="text-lg text-center font-bold text-gray-800">{item.title}</h4>
                            <p className="mt-1 text-green-600">${item.price}</p>
                            <button onClick={()=> carthandler({id:item.id, Image:item.thumbnail,price:item.price})} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    )
                }
            )
         }
        </div>
      </section>
    </div>
  );
};

export default Home;