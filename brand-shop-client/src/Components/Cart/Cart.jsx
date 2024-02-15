import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import CartCard from './CartCard';
import CartCard2 from './CartCard2';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [usedProducts, setUsedProducts] = useState();
  const [customCard, setCustomCard] = useState();
  const cart = `http://localhost:5000/cart?email=${user?.email}`;
  useEffect(() => {
    fetch(cart)
      .then(res => res.json())
      .then(data => setUsedProducts(data));
  }, [cart]);

  const url = `http://localhost:5000/userBrands?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCustomCard(data));
  }, [url]);

  return (
    <>
      {usedProducts?.length > 0 || customCard?.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-full">
            {usedProducts?.map(product => (
              <CartCard
                key={product._id}
                product={product}
                usedProducts={usedProducts}
                setUsedProducts={setUsedProducts}
              ></CartCard>
            ))}
          </div>
          <div className="grid grid-cols-3">
            {customCard?.map(product => (
              <CartCard2
                key={product._id}
                product={product}
                customCard={customCard}
                setCustomCard={setCustomCard}
              ></CartCard2>
            ))}
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

export default Cart;
