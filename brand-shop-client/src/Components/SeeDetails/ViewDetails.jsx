import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
  const [bring, setBring] = useState([]);
  const [cart, setCart] = useState();
  const bringAll = useLoaderData();

  // console.log(bringAll);

  const { _id } = useParams();
  const idInt = parseInt(_id);
  // console.log(idInt);

  useEffect(() => {
    const bringData = bringAll.find(bring => bring?.id == idInt);
    // const bringData = bringAll.find(bring => console.log(bring?.id, _id));
    // console.log(bringData);
    setBring(bringData);
  }, [_id, bringAll]);

  const handleCart = e => {
    // e.preventDefault();
    console.log(bring?._id);
  };
  // console.log(_id);
  // console.log(bring);
  return (
    <div>
      <h1 className="text-3xl text-white">Details Here : </h1>
      <img src={bring?.image} alt="" />
      <h1 className="text-white">{bring?.brandName1}</h1>
      <Link>
        <button onClick={() => handleCart()} className="btn">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ViewDetails;
