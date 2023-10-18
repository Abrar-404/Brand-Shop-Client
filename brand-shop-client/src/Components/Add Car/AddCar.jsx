import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Toyota', label: 'Toyota' },
  { value: 'Ford', label: 'Ford' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Tesla', label: 'Tesla' },
  { value: 'Honda', label: 'Honda' },
];

const AddCar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddCar = e => {
    e.preventDefault();

    const formData = e.target;

    const name = formData.name.value;
    const type = formData.type.value;
    const price = formData.price.value;
    const brand = formData.brand.value;
    const description = formData.description.value;
    const image = formData.image.value;

    const addCars = {
      name,
      type,
      price,
      brand,
      description,
      image,
    };

    console.log(addCars);
  };

  return (
    <div>
      <div>
        <div className="p-24">
          <div className="mb-10">
            <h1 className="text-4xl flex justify-center font-extrabold">
              GRAB YOUR DREAM CAR
            </h1>
          </div>

          <form onSubmit={handleAddCar}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
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
                  <span className="label-text font-bold">Type</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Ex: Car/Bike/Truck"
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
                    type="Number"
                    placeholder="$Price"
                    name="price"
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            <Select
              defaultValue={selectedOption}
              placeholder="Brand Name"
              onChange={setSelectedOption}
              options={options}
            />

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
                    name="image"
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

            <button className="btn w-full mt-10 btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
