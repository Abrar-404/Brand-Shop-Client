const CardDetails = ({ bring }) => {
  const {
    image1,
    image2,
    image3,
    image4,
    brandName1,
    brandName2,
    brandName3,
    brandName4,
  } = bring || {};
  return (
    <div className="grid grid-cols-1 gap-5 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-2">
      {/* card-1 */}
      <div className="card card-compact w-full bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={image1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{brandName1}</div>
          </h2>
        </div>
      </div>

      {/* card-2 */}
      <div className="card card-compact w-full bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={image2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{brandName2}</div>
          </h2>
        </div>
      </div>

      {/* card-3 */}
      <div className="card card-compact mt-5 w-full bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={image3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{brandName3}</div>
          </h2>
        </div>
      </div>

      {/* card-4 */}
      <div className="card card-compact mt-5 w-full bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={image4}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{brandName4}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
