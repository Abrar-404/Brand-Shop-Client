const SingleCardDetail = ({ brand }) => {
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
              <h1 className="card-title text-white">Type: Car</h1>
              <h1 className="card-title text-white">Price: {brand?.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetail;
