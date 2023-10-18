import { Link } from 'react-router-dom';

const BrandCards = ({ brand }) => {
  const { brandName, image, status } = brand || {};
  // console.log(brand);
  return (
    <div>
      <Link to={`/cardDetails/${brandName}`}>
        <div className="card card-compact bg-slate-700 bg-opacity-30 shadow-xl">
          <figure>
            <img
              className="w-[90%] h-[250px] rounded-lg mt-10"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              Brand Name:
              <div className="badge badge-secondary">{brandName}</div>
            </h2>
            <h2 className="text-base text-white">
              Status: <span className="font-bold">{status}</span>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCards;
