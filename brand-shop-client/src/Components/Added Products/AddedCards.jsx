const AddedCards = ({ userbrands }) => {
  const { name, price, selectedOption, selectedOptionNew, description, image } =
    userbrands || {};
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="mt-10 rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Price: ${price}</p>
          <p>{selectedOption}</p>
          <p>{selectedOptionNew}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCards;
