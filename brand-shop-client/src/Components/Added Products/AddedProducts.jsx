import { useLoaderData } from 'react-router-dom';
import AddedCards from './AddedCards';
const AddedProducts = () => {
  const allBrands = useLoaderData();

  return (
    <div>
      <div className="m-auto mt-20">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allBrands?.map(userbrands => (
            <AddedCards
              key={userbrands?._id}
              userbrands={userbrands}
            ></AddedCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedProducts;
