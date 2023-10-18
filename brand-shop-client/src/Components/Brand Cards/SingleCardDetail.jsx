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
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{brand?.brandName1}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetail;
