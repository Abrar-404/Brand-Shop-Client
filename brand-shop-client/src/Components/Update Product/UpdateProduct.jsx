import { useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateProduct = () => {
  const [typeInput, setTypeInput] = useState('');
  const [brandNameInput, setBrandNameInput] = useState('');
  const products = useLoaderData();
  const { _id, name, price, type, brandName, image } = products || {};
  const { user } = useContext(AuthContext);

  const handleType = e => {
    setTypeInput(e.target.value);
  };

  const handleBrandName = e => {
    setBrandNameInput(e.target.value);
  };

  const handleUpdateCar = e => {
    e.preventDefault();

    const formData = e.target;

    const email = user.email;
    const name = formData.name.value;
    const price = formData.price.value;
    const image = formData.image.value;

    const UpdateCars = {
      name,
      email,
      price,
      type,
      brandName,
      image,
    };

    console.log(UpdateCars);

    fetch(`http://localhost:5000/updateItem/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateCars),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Updated Successfully',
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
                    defaultValue={name}
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
                    defaultValue={price}
                    className="input input-bordered input-primary w-full rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div>
              <div className="flex justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Type
                    </span>
                  </label>
                  <select
                    onChange={handleType}
                    value={typeInput}
                    name="type"
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
                    <span className="label-text text-white font-bold">
                      Brand Name
                    </span>
                  </label>
                  <select
                    onChange={handleBrandName}
                    value={brandNameInput}
                    name="brandName"
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
                    defaultValue={image}
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
