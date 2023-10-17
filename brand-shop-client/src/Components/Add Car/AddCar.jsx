const AddCar = () => {
  return (
    <div>
      <div>
        <div className="p-24">
          <div className="mb-10">
            <h1 className="text-4xl flex justify-center font-extrabold">
              GRAB YOUR DREAM CAR
            </h1>
          </div>

          <form>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Car Name</span>
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

              <div className="form-control md:w-1/2 ml-10">
                <label className="label">
                  <span className="label-text font-bold">Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Ex: Toyota/Ford/BMW/Lamborghini"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div className="md:flex mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="price"
                    placeholder="Product Price $"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text font-bold">Short Description</span>
              </label>
              <textarea
                className="textarea w-full textarea-primary"
                type="text"
                name="description"
                placeholder="Ex: The Lamborghini Revuelto, I prefer Red Color and in Model-2015"
              ></textarea>
            </div>

            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Ex: https://i.ibb.co/4TNVZM2/360-F-551262235-q-Ny2-OAKOkb639g1ra-Bm-IKWHDlr-LQBWEH.jpg"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            {/* Ratings */}
            <div className="mx-auto flex justify-center mt-10">
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

            <button className="btn w-full mt-10 btn-primary">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
