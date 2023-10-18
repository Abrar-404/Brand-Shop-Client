const UpdateProduct = () => {
  return (
    <div>
      <div>
        <div className="p-24">
          <div className="mb-10">
            <h1 className="text-4xl text-white flex justify-center font-extrabold">
              GRAB YOUR DREAM CAR
            </h1>
          </div>

          <form>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2 lg:w-1/2 w-full lg:ml-10 md:ml-10">
                <label className="label">
                  <span className="label-text text-white font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="Price"
                    placeholder="$Price"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div>
              <div className="flex justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white  font-bold">
                      Type
                    </span>
                  </label>
                  <select className="select select-primary w-full">
                    <option selected>Brand Name</option>
                    <option>Toyota</option>
                    <option>Ford</option>
                    <option>BMW</option>
                    <option>Mercedes-Benz</option>
                    <option>Tesla</option>
                    <option>Honda</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white font-bold">Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="image"
                    placeholder="Ex: https://i.ibb.co/4TNVZM2/360-F-551262235-q-Ny2-OAKOkb639g1ra-Bm-IKWHDlr-LQBWEH.jpg"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            {/* Ratings */}
            <h1 className="mx-auto text-white text-2xl font-bold justify-center flex">
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
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-1"
                  checked
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-green-500 mask mask-star-2 mask-half-2"
                />
              </div>
            </div>

            <button className="btn w-full mt-10 btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
