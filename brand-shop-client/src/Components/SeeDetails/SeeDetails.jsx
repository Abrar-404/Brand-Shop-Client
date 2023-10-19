import { Link } from 'react-router-dom';
const SeeDetails = ({ bringDetail }) => {


  return (
    <div>
      <Link>
        <div className="card card-compact bg-slate-700 bg-opacity-30 shadow-xl">
          {bringDetail?.map(brand => (
            <SingleCardDetail key={brand.id} brand={brand}></SingleCardDetail>
          ))}
          <figure>
            <img
              className="w-[90%] h-[250px] rounded-lg mt-10"
              src=""
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              Brand Name:
              <div className="badge badge-secondary">{brandName1}</div>
            </h2>
            <h2 className="text-base text-white">
              Status: <span className="font-bold">{}</span>
            </h2>
          </div>
          <Link to="/cart">
            <button className="btn btn-primary">Add To Cart</button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default SeeDetails;
