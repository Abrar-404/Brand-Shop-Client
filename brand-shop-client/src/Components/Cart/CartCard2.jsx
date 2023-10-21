import { useState } from 'react';
import Swal from 'sweetalert2';

const CartCard2 = ({ product, customCard, setCustomCard }) => {
  const { _id } = product || {};

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

        fetch(
          `https://brand-shop-server-phju0kq6a-abrar-404.vercel.app/userBrands/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

              // eslint-disable-next-line react/prop-types
              const remaining = customCard?.filter(
                products => products?._id !== _id
              );
              setCustomCard(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-compact  bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[290px] rounded-lg mt-10"
            src={product.image}
            alt={product.brandName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            Brand Name:
            <div className="badge badge-secondary">{product.brandName}</div>
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartCard2;
