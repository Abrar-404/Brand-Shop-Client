import { useLoaderData } from 'react-router-dom';
import AddedCards from './AddedCards';
const AddedProducts = () => {
  const allBrands = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl text-white">Products Here: {allBrands.length}</h1>
      <div>
        {allBrands?.map(brand => (
          <AddedCards key={brand?._id} brand={brand}></AddedCards>
        ))}
      </div>
    </div>
  );
};

export default AddedProducts;
