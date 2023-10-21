import Swal from 'sweetalert2';

const CartCard = ({ product, usedProducts, setUsedProducts }) => {
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

        fetch(`https://brand-shop-server-alpha.vercel.app/cart/${_id}`, {
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
    <div className="">
      <div className="card card-compact bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[290px] rounded-lg mt-10"
            src={product.image}
            alt={product.brandName}
          />
        </figure>
        <div className="card-body">
          <div className="card-title flex items-center justify-around text-white">
            <div className="text-left">
              <div className="flex mx-auto gap-2 items-center">
                <h1>Brand Name:</h1>
                <div className="badge badge-secondary">{product.brandName}</div>
              </div>
              <div className="flex mx-auto items-center gap-2">
                <h1>Name:</h1>
                <div className="badge badge-secondary">
                  {product.brandName1}
                </div>
              </div>
            </div>
            <img
              className="rounded-full w-[30%] h-[20%]"
              src="https://i.ibb.co/nLTmtDQ/output-onlinegiftools-2.gif"
              alt=""
            />
          </div>
          <div className="mx-auto flex items-center justify-center gap-10">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
