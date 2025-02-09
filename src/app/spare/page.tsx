// // "use client";
// // import React, { useEffect, useState } from "react";
// // import sanityClient from "@sanity/client";
// // import Image from "next/image";  // Correctly import Image

// const sanity = sanityClient({
//   projectId: "3u1xqp47",
//   dataset: "production",
//   apiVersion: '2024-01-04',
//   useCdn: true,
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//         *[type=="product"]{
//           _id,
//           title,
//           price,
//           description,
//           discountPercentage,
//           "imageUrl": productImage.asset->url,
//           tags
//         }
//       `;
//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error Fetching Products:", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const truncateDescription = (description: string) => {
//     // Truncate the description to 100 characters, you can adjust the length if needed
//     return description.length > 100 ? description.substring(0, 100) + "..." : description;
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//           >
//             {/* Use Next.js Image component */}
//             <Image
//               src={product.imageUrl}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">{product.price}</p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span key={index} className="text-xs bg-slate-400 text-black rounded-full px-2 py-1">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Add to cart button */}
//               <button
//                 className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;
