import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddedCards = ({ userbrands, usedProducts, setUsedProducts }) => {
  const {
    _id,
    name,
    email,
    price,
    selectedOption,
    selectedOptionNew,
    description,
    image,
  } = userbrands || {};

  useEffect(() => {
    fetch(
      `https://brand-shop-server-j4ozlbyuj-abrar-404.vercel.app/userBrands?email=${email}`
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }, [email]);

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
          `https://brand-shop-server-j4ozlbyuj-abrar-404.vercel.app/userBrands/${_id}`,
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
          <img src={image} alt="" className="mt-10 rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-semibold">Name: {name}</h2>
          <p className=" text-white font-medium">Price: ${price}</p>
          <p className=" text-white font-medium">Type: {selectedOption}</p>
          <p className=" text-white font-medium">
            Brand Name: {selectedOptionNew}
          </p>
        </div>
        <Link to={`/updatecar/${_id}`}>
          <button className="btn btn-primary">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddedCards;
