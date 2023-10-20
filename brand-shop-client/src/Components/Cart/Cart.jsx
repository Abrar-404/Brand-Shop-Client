// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = ({ usercart, usedCarts, setUsedProducts }) => {
  // Use useLoaderData to get the added products
  const addedProducts = useLoaderData();

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

        fetch(`http://localhost:5000/cart/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

              // eslint-disable-next-line react/prop-types
              const remaining = usedCarts?.filter(
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
      {addedProducts.map(product => (
        <div
          key={product.id}
          className="card card-compact w-[40%] h-[70%] bg-slate-700 bg-opacity-30 shadow-xl"
        >
          <figure>
            <img
              className="w-[90%] h-[250px] rounded-lg mt-10"
              src={product.image} // Set the image source to the product's image
              alt={product.brandName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              Brand Name:
              <div className="badge badge-secondary">{product.brandName}</div>
              <div>
                <button className="btn btn-primary">Delete</button>
              </div>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
