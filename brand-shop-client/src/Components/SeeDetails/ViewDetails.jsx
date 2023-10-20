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
      <div className="card card-compact lg:w-[40%] md:w-[70%] w-[100%] flex mx-auto justify-center mt-40 bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={bring?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="">
            <div>
              <h2 className="card-title flex justify-around text-white">
                <div className="badge badge-secondary text-xs">
                  {bring?.brandName1}
                </div>
                <div className="badge badge-secondary text-xs">
                  {bring?.price}
                </div>
              </h2>
            </div>
            <div>
              <h1 className="card-title mt-5 text-white text-xs md:text-sm lg:text-base">
                {bring?.description}
              </h1>
            </div>
          </div>
          <div className="mx-auto">
            <Link>
              <button
                onClick={() => handleCart()}
                className="btn btn-secondary"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        className="rounded-full mx-auto lg:w-[10%] mt-5 lg:h-[30%] md:w-[20%] md:h-[20%] w-[20%] h-[20%]"
        src="https://i.ibb.co/ZdZV812/hot-typography.gif"
        alt=""
      />
    </div>
  );
};

export default ViewDetails;
