export interface Product {
    _id: string;
    title: string;
    _type: "product";
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
   image?: {
      asset: {
        _ref: string;
        _type : "image";
      };
    };
    tags: string[];
}