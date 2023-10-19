import { Link } from 'react-router-dom';

const AddedCards = ({ userbrands }) => {
  const { name, price, selectedOption, selectedOptionNew, description, image } =
    userbrands || {};
  return (
    <div>
      <div className="card bg-slate-800 bg-opacity-40 shadow-xl">
        <figure>
          <img src={image} alt="" className="mt-10 rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-semibold">Name: {name}</h2>
          <p className=" text-white font-medium">Price: ${price}</p>
          <p className=" text-white font-medium">Type: {selectedOption}</p>
          <p className=" text-white font-medium">
            Brand Name: {selectedOptionNew}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddedCards;
