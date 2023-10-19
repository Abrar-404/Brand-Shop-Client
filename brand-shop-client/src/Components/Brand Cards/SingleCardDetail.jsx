import { BsFillPenFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCardDetail = ({ brand }) => {
  const { _id } = brand || {};
  return (
    <div>
      <div className="card card-compact w-full bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={brand?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-evenly">
            <div>
              <h2 className="card-title text-white">
                Brand Name:
                <div className="badge badge-secondary">{brand?.brandName}</div>
              </h2>
              <h2 className="card-title text-white">
                Name:
                <div className="badge badge-secondary">{brand?.brandName1}</div>
              </h2>
            </div>
            <div>
              <h1 className="card-title text-white">Type: {brand?.type}</h1>
              <h1 className="card-title text-white">Price: {brand?.price}</h1>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div>
              {/* Ratings */}
              <h1 className="mx-auto text-white text-xl font-bold justify-center flex">
                Ratings
              </h1>
              <div className="mx-auto flex justify-center">
                <div className="rating rating-lg rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-2"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-2"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="bg-blue-500 mask mask-star-2 mask-half-2"
                  />
                </div>
              </div>
            </div>
            <div>
              <Link to={`/updatecar/${_id}`}>
                <button className="btn btn-primary text-white">
                  Update{' '}
                  <span className="text-red-600">
                    <BsFillPenFill></BsFillPenFill>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-evenly mt-2">
            <Link>
              <button className="btn btn-primary">
                View Details <FaEye></FaEye>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetail;
