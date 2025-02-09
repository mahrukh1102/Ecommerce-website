"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";



const inventory = () => {

    const [product, setProduct] = useState<Product[]>([])
    useEffect(()=> {
        async function fetchProducts() {
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProduct(fetchedProduct)
        }
        fetchProducts()


    },[])



  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        {product.map((product)=>(
            <div key={product._id}>
                {product.title}

            </div>
        ))}
    </div>
  )
}

export default inventory

