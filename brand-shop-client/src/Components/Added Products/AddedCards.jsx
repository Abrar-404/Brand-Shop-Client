import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaOpencart } from 'react-icons/fa';

const AddedCards = ({ userbrands, usedProducts, setUsedProducts }) => {
  const { _id, name, email, price, brandName, type, image } = userbrands || {};

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        console.log('Deleted Successfully');

        fetch(`https://brand-shop-server-alpha.vercel.app/userBrands/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

              // eslint-disable-next-line react/prop-types
              const remaining = usedProducts?.filter(
                products => products?._id !== _id
              );
              setUsedProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-slate-800 bg-opacity-40 shadow-xl">
        <figure>
          <img
            src={image}
            alt=""
            className="mt-10 lg:w-96 lg:h-72 md:w-80 rounded-lg"
          />
        </figure>
        <div className="flex items-center justify-around mx-auto">
          <div className="card-body">
            <h2 className="card-title text-white font-semibold">
              Name: {name}
            </h2>
            <p className=" text-white font-medium">Price: ${price}</p>
            <p className=" text-white font-medium">Type: {type}</p>
            <p className=" text-white font-medium">Brand Name: {brandName}</p>
          </div>
          <Link to={`/updatecar/${_id}`}>
            <button className="btn btn-outline btn-secondary items-center">
              Update<FaOpencart></FaOpencart>
            </button>
          </Link>
        </div>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddedCards;
