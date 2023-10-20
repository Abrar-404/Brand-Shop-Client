import { useState } from 'react';
// import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';

const Cart = () => {
  // Use useLoaderData to get the added products
  const addedProducts = useLoaderData();
  const [usedProducts, setUsedProducts] = useState(addedProducts);

  return (
    <div>
      {usedProducts?.map(product => (
        <CartCard
          key={product._id}
          product={product}
          usedProducts={usedProducts}
          setUsedProducts={setUsedProducts}
        ></CartCard>
      ))}
    </div>
  );
};

export default Cart;
