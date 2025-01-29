"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";


interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

