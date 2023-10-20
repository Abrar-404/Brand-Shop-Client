import { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import AddedCards from './AddedCards';
const AddedProducts = () => {
  const { user } = useContext(AuthContext);
  const [usedProducts, setUsedProducts] = useState();
  const url = `http://localhost:5000/userBrands?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsedProducts(data));
  }, [url]);

  return (
    <div>
      <div className="m-auto mt-20">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
          {usedProducts?.map(userbrands => (
            <AddedCards
              key={userbrands?._id}
              userbrands={userbrands}
              usedProducts={usedProducts}
              setUsedProducts={setUsedProducts}
            ></AddedCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedProducts;

// import { useState, useEffect } from 'react';
// import AddedCards from './AddedCards';

// const AddedProducts = () => {
//   // Initialize usedProducts as an empty array
//   const [usedProducts, setUsedProducts] = useState([]);

//   // Update usedProducts when allBrands changes
//   useEffect(() => {
//     fetch('http://localhost:5000/userBrands')
//       .then(res => res.json())
//       .then(data => console.log(data));
//     // setUsedProducts(allBrands);
//   }, []);

//   return (
//     <div>
//       <div className="m-auto mt-20">
//         <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {usedProducts?.map(userbrands => (
//             <AddedCards
//               key={userbrands?._id}
//               userbrands={userbrands}
//               usedProducts={usedProducts}
//               setUsedProducts={setUsedProducts}
//             ></AddedCards>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddedProducts;
