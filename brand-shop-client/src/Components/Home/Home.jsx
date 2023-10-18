import Footer from '../Footer/Footer';
import Banner from '../Layouts/Banner';
import Services from '../Services/Services';
import BrandCards from '../Brand Cards/BrandCards';
import { useLoaderData } from 'react-router-dom';
import Slider2 from '../Hot deals/Slider2';

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <h1>This is home</h1>

      <Banner></Banner>
      <Services></Services>
      <div>
        <div className="text-3xl  flex justify-center text-left mt-20 font-bold">
          <h1 className="text-white text-left mx-auto">
            Hot <span className="text-red-600">Deals</span>
          </h1>
        </div>
        <div className="lg:max-w-[90%] h-auto md:max-w-[80%] mt-10 mx-auto  text-left justify-center">
          <Slider2></Slider2>
        </div>
      </div>
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
