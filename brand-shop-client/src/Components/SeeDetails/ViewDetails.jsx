import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const ViewDetails = () => {
  const [bring, setBring] = useState([]);
  const [cart, setCart] = useState([]);
  const bringAll = useLoaderData();
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  // console.log(bringAll);

  const { _id } = useParams();
  const idInt = parseInt(_id);
  // console.log(idInt);

  useEffect(() => {
    const bringData = bringAll.find(bring => bring?.id == idInt);
    setBring(bringData);
  }, [_id, bringAll]);

  const newProduct = {
    email: user.email,
    id: bring?.id,
    status_: bring?.status,
    brandName: bring?.brandName,
    brandName1: bring?.brandName1,
    image: bring?.image,
    price: bring?.price,
    description: bring?.description,
    type: bring?.type,
  };

  const addMyProducts = () => {
    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      // .then(res => res.json())
      .then(response => {
        if (response.status === 200) {
          // Product added successfully

          // return response.json();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          return response.json();
        } else if (response.status === 400) {
          // Product already exists, show an alert
          return response.text().then(message => {
            alert(`Product already exists in the cart: ${message}`);
          });
        }
      });

    // });
    console.log(newProduct);
  };

  return (
    <div>
      <div className="card card-compact lg:w-[40%] md:w-[70%] w-[100%] flex mx-auto justify-center mt-40 bg-slate-700 bg-opacity-30 shadow-xl">
        <figure>
          <img
            className="w-[90%] h-[250px] rounded-lg mt-10"
            src={bring?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="">
            <div>
              <h2 className="card-title flex justify-around text-white">
                <div className="badge badge-secondary text-xs">
                  {bring?.brandName1}
                </div>
                <div className="badge badge-secondary text-xs">
                  {bring?.price}
                </div>
              </h2>
            </div>
            <div>
              <h1 className="card-title mt-5 text-white text-xs md:text-sm lg:text-base">
                {bring?.description}
              </h1>
            </div>
          </div>
          <div className="mx-auto">
            <Link>
              <button
                onClick={() => addMyProducts()}
                className="btn btn-secondary"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        className="rounded-full mx-auto lg:w-[10%] mt-5 lg:h-[30%] md:w-[20%] md:h-[20%] w-[20%] h-[20%]"
        src="https://i.ibb.co/ZdZV812/hot-typography.gif"
        alt=""
      />
    </div>
  );
};

export default ViewDetails;
