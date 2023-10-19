import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionNew, setSelectedOptionNew] = useState('');
  const products = useLoaderData();
  const { _id, brandName } = products || {};

  const handleSelectChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleSelectNewChange = e => {
    setSelectedOptionNew(e.target.value);
  };

  const handleUpdateCar = e => {
    e.preventDefault();

    const formData = e.target;

    const name = formData.name.value;
    const price = formData.price.value;
    const image = formData.image.value;

    const UpdateCars = {
      name,
      price,
      selectedOption,
      selectedOptionNew,
      image,
    };

    console.log(UpdateCars);

    fetch('http://localhost:5000/userBrands', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateCars),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="p-24">
          <div className="mb-10">
            <h1 className="text-4xl text-white flex justify-center font-extrabold">
              Update Your Car : {brandName}
            </h1>
          </div>

          <form onSubmit={handleUpdateCar}>
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
                    name="price"
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
                  <select
                    onChange={handleSelectChange}
                    value={selectedOption}
                    className="select select-primary w-full"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="Sedans">Sedans</option>
                    <option value="EV">EV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="SAV">SAV</option>
                    <option value="Pickup">Pickup</option>
                    <option value="SUV">SUV</option>
                  </select>

                  <label className="label">
                    <span className="label-text text-white  font-bold">
                      Brand Name
                    </span>
                  </label>
                  <select
                    onChange={handleSelectNewChange}
                    value={selectedOptionNew}
                    className="select select-primary w-full"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Honda">Honda</option>
                    <option value="Lamborghini">Lamborghini</option>
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
