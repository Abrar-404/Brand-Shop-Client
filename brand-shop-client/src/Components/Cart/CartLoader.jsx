// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Cart from './Cart';

// const CartLoader = () => {
//   const allCarts = useLoaderData();
//   const [usedCarts, setUsedCarts] = useState(allCarts);

//   return (
//     <div>
//       {usedCarts?.map(usercart => (
//         <Cart
//           key={usercart?._id}
//           _id={usercart?._id}
//           usercart={usercart}
//           usedCarts={usedCarts}
//           setUsedProducts={setUsedCarts}
//         ></Cart>
//       ))}
//     </div>
//   );
// };

// export default CartLoader;
