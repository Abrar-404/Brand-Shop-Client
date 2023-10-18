import Footer from '../Footer/Footer';
import Banner from '../Layouts/Banner';
import Services from '../Services/Services';
import BrandCards from '../Brand Cards/BrandCards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <h1>This is home</h1>

      <Banner></Banner>
      <Services></Services>
      <h1 className="text-center mt-20 text-3xl font-bold text-white">
        Our <span className="text-red-600">Brands</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 mt-10">
        {brands?.map(brand => (
          <BrandCards key={brand.id} brand={brand}></BrandCards>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
