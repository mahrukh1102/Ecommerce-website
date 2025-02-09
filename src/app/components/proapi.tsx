// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import React from 'react'

// interface Product {
//     name: string,
//     id:string,
//     price:string,
//     description:string,
//     category:string,
//     image:any
    
// }

// const Proapi = async() => {
 
//  const query=`*[_type=="product"]{
//   name, price, description,id,
//     category,
//     "image":image.asset._ref, } `

//     const products:Product[]=await client.fetch(query)
//         console.log(products)
//     return (
//     <div>
//        {products.map((product:Product)=>
       
//        (
        
//         <div key={product.id}>
//             <h1>{product.name}</h1>
//             <p>{product.price}</p>
//             <p>{product.description}</p>
//             {product.image && (
//             <img
//               src={urlFor(product.image).width(300).url()} // Generates image URL with width 300
//               alt={product.name}
//               style={{ maxWidth: "100%", height: "auto" }} // Responsive styling
//             />
//           )}
           

//         </div>

//        ))} 
       
       
           
//     </div>
//   )
// }

// export default Proapi

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import React from 'react';

interface Product {
    name: string;
    id: string;
    price: string;
    description: string;
    category: string;
    image: any;
}

const Proapi = async () => {
    const query = `*[_type=="product"]{
        name, price, description, id, category, "image": image.asset._ref
    }`;

    const products: Product[] = await client.fetch(query);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product: Product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        {product.image && (
                            <img
                                src={urlFor(product.image).width(300).url()}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                        )}
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proapi;
