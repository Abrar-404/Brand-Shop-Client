import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AddedCards from './AddedCards';
const AddedProducts = () => {
  const { user } = useContext(AuthContext);
  const [usedProducts, setUsedProducts] = useState();
  const url = `https://brand-shop-server-phju0kq6a-abrar-404.vercel.app/userBrands?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsedProducts(data));
  }, [url]);

  return (
    <>
      {usedProducts?.length > 0 ? (
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
      ) : (
        <>
          <div className="relative ">
            <h1 className="text-4xl  top-[10rem] right-[35%] absolute text-center font-bold text-white ">
              No product available
            </h1>
            <img
              className="h-screen  mx-auto"
              src="https://i.ibb.co/frY869C/output-onlinegiftools-1.gif"
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
};

export default AddedProducts;
