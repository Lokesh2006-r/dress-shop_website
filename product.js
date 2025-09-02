
// // Sample data; replace image with local imports or remote URLs
// const productsData= [
//   {
//     id: 1,
//     title: 'Slim Fit Men Shirt',
//     category: 'Men',
//     price: 799,
//     img: 'https://picsum.photos/seed/m1/600/600'
//   },
//   {
//     id: 2,
//     title: 'Floral Women Dress',
//     category: 'Women',
//     price: 1299,
//     img: 'https://picsum.photos/seed/w1/600/600'
//   },
//   {
//     id: 3,
//     title: 'Kids Casual Tee',
//     category: 'Kids',
//     price: 399,
//     img: 'https://picsum.photos/seed/k1/600/600'
//   },
//   {
//     id: 4,
//     title: 'Trendy Sunglasses',
//     category: 'Accessories',
//     price: 599,
//     img: 'https://picsum.photos/seed/a1/600/600'
//   },
//   {
//     id: 5,
//     title: 'Denim Jacket',
//     category: 'Men',
//     price: 1699,
//     img: 'https://picsum.photos/seed/m2/600/600'
//   },
//   {
//     id: 6,
//     title: 'Kids Winter Coat',
//     category: 'Kids',
//     price: 1499,
//     img: 'https://picsum.photos/seed/k2/600/600'
//   }
// ]

// export default productsData




// // src/product.js

// const productsData = [
//   // --- MEN (1–25) ---
//   { id: 1, title: "Linean shirts", category: "Men", price: 1299, img: "/images/shirt1.jpg" },
//   { id: 2, title: "Polo Cotton T-Shirt", category: "Men", price: 799, img: "https://picsum.photos/seed/m2/600/600" },
//   { id: 3, title: "Formal Blazer", category: "Men", price: 3499, img: "https://picsum.photos/seed/m3/600/600" },
//   { id: 4, title: "Casual Sneakers", category: "Men", price: 1799, img: "https://picsum.photos/seed/m4/600/600" },
//   { id: 5, title: "Leather Jacket", category: "Men", price: 4599, img: "https://picsum.photos/seed/m5/600/600" },
//   // ... add up to 25 men’s items

//   // --- WOMEN (26–50) ---
//   { id: 26, title: "Cotton Saree", category: "Women", price: 1999, img: "https://picsum.photos/seed/w1/600/600" },
//   { id: 27, title: "Floral Maxi Dress", category: "Women", price: 1499, img: "https://picsum.photos/seed/w2/600/600" },
//   { id: 28, title: "Denim Jacket", category: "Women", price: 2299, img: "https://picsum.photos/seed/w3/600/600" },
//   { id: 29, title: "Ethnic Kurti", category: "Women", price: 1199, img: "https://picsum.photos/seed/w4/600/600" },
//   { id: 30, title: "Party Heels", category: "Women", price: 1899, img: "https://picsum.photos/seed/w5/600/600" },
//   // ... add up to 25 women’s items

//   // --- KIDS (51–75) ---
//   { id: 51, title: "Kids Cotton T-Shirt", category: "Kids", price: 499, img: "https://picsum.photos/seed/k1/600/600" },
//   { id: 52, title: "Cartoon Print Hoodie", category: "Kids", price: 899, img: "https://picsum.photos/seed/k2/600/600" },
//   { id: 53, title: "Kids Denim Shorts", category: "Kids", price: 699, img: "https://picsum.photos/seed/k3/600/600" },
//   { id: 54, title: "School Shoes", category: "Kids", price: 999, img: "https://picsum.photos/seed/k4/600/600" },
//   { id: 55, title: "Winter Sweater", category: "Kids", price: 1199, img: "https://picsum.photos/seed/k5/600/600" },
//   // ... add up to 25 kids’ items

//   // --- ACCESSORIES (76–100) ---
//   { id: 76, title: "Trendy Sunglasses", category: "Accessories", price: 799, img: "https://picsum.photos/seed/a1/600/600" },
//   { id: 77, title: "Leather Belt", category: "Accessories", price: 599, img: "https://picsum.photos/seed/a2/600/600" },
//   { id: 78, title: "Analog Wrist Watch", category: "Accessories", price: 2499, img: "https://picsum.photos/seed/a3/600/600" },
//   { id: 79, title: "Sports Cap", category: "Accessories", price: 399, img: "https://picsum.photos/seed/a4/600/600" },
//   { id: 80, title: "Travel Backpack", category: "Accessories", price: 1899, img: "https://picsum.photos/seed/a5/600/600" },
//   // ... add up to 25 accessories
// ];

// export default productsData;



















const productsData = [
  // ================= MEN =================
  {
    id: 1,
    title: "Shirts",
    category: "Men",
    subcategory: "Shirts",
    variants: [
      { id: 101, name: "Formal Shirt - White", price: 1199, img: "images/lineanshirts.jpg" },
      { id: 102, name: "Formal Shirt - Blue", price: 1299, img: "images/shirt1.jpg" },
      { id: 103, name: "Casual Shirt - Checked", price: 999, img: "images/shirt2.jpg" },
      { id: 104, name: "Linen Shirt - Black", price: 1399, img: "images/shirt3.jpg" },
      { id: 105, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt4.jpg" },
      { id: 106, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt5.jpg" },
      { id: 107, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt6.jpg" },
      { id: 108, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt7.jpg" },
      { id: 109, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt8.jpg" },
      { id: 110, name: "Polo T-Shirt - Red", price: 899, img: "images/shirt9.png" },

    ],
  },
  {
    id: 2,
    title: "Pants",
    category: "Men",
    subcategory: "Pants",
    variants: [
      { id: 201, name: "Slim Fit Jeans - Blue", price: 1499, img: "images/pants.jpg" },
      { id: 202, name: "Chinos - Khaki", price: 1299, img: "images/pant2.jpg" },
      { id: 203, name: "Cargo Pants - Olive", price: 1599, img: "images/pant3.jpg" },
      { id: 204, name: "Formal Trousers - Black", price: 1699, img: "images/pant4.jpg" },
      { id: 205, name: "Formal Trousers - Black", price: 1699, img: "images/pant5.jpg" },
      { id: 206, name: "Formal Trousers - Black", price: 1699, img: "images/pant6.jpg" },
    ],
  },

  // ================= WOMEN =================
  {
    id: 3,
    title: "Sarees",
    category: "Women",
    subcategory: "Sarees",
    variants: [
      { id: 301, name: "Cotton Saree - Yellow", price: 2499, img: "images/sarees.jpg" },
      { id: 302, name: "Silk Saree - Red", price: 4999, img: "images/saree1.jpg" },
      { id: 303, name: "Designer Saree - Black", price: 6999, img: "images/saree2.jpg" },
      { id: 304, name: "Georgette Saree - Green", price: 3499, img: "images/saree3.jpg" },
      { id: 305, name: "Georgette Saree - Green", price: 3499, img: "images/saree4.jpg" },
      { id: 306, name: "Georgette Saree - Green", price: 3499, img: "images/saree5.jpg" },
    ],
  },
  {
    id: 4,
    title: "Dresses",
    category: "Women",
    subcategory: "Dresses",
    variants: [
      { id: 401, name: "Evening Gown - Blue", price: 2999, img: "images/dress1.jpg" },
      { id: 402, name: "Party Dress - Pink", price: 1999, img: "images/dress2.jpg" },
      { id: 403, name: "Summer Dress - Floral", price: 1799, img: "images/dress3.jpg" },
      { id: 404, name: "Summer Dress - Floral", price: 1799, img: "images/dress4.jpg" },
      { id: 405, name: "Summer Dress - Floral", price: 1799, img: "images/dress5.jpg" },
      { id: 406, name: "Summer Dress - Floral", price: 1799, img: "images/dress6.jpg" },
    ],
  },

  // ================= ACCESSORIES =================
  {
    id: 5,
    title: "Footwear",
    category: "Unisex",
    subcategory: "Shoes",
    variants: [
      { id: 501, name: "Sneakers - White", price: 1999, img: "images/foot.jpg" },
      { id: 502, name: "Sandals - Brown", price: 999, img: "images/foot1.jpg" },
      { id: 503, name: "Formal Shoes - Black", price: 2599, img: "images/foot2.jpg" },
      { id: 504, name: "Heels - Red", price: 1899, img: "images/foot3.jpg" },
      { id: 505, name: "Heels - Red", price: 1899, img: "images/foot4.jpg" },
      { id: 506, name: "Heels - Red", price: 1899, img: "images/foot5.jpg" },
    ],
  },
  {
    id: 6,
    title: "Accessories",
    category: "Unisex",
    subcategory: "Accessories",
    variants: [
      { id: 601, name: "Sunglasses - Aviator", price: 1299, img: "images/accessories.jpg" },
      { id: 602, name: "Leather Belt - Black", price: 799, img: "images/acces1.jpg" },
      { id: 603, name: "Analog Watch - Silver", price: 2999, img: "images/acces2.jpg" },
      { id: 604, name: "Backpack - Grey", price: 1499, img: "images/acces3.jpg" },
      { id: 605, name: "Backpack - Grey", price: 1499, img: "images/acces4.jpg" },
      { id: 606, name: "Backpack - Grey", price: 1499, img: "images/acces5.jpg" },
    ],
  },
];


export default productsData;