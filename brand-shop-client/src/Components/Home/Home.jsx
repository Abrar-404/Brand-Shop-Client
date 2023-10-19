import Footer from '../Footer/Footer';
import Banner from '../Layouts/Banner';
import Services from '../Services/Services';
import BrandCards from '../Brand Cards/BrandCards';
import { useLoaderData } from 'react-router-dom';
import Slider2 from '../Hot deals/Slider2';
import { useState } from 'react';

const Home = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const brands = useLoaderData();
  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };
  const pageThemeClass = isLightTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={pageThemeClass}>
      <input
        type="checkbox"
        className="toggle lg:ml-[1340px] md:ml-[710px] ml-[370px] mt-5 mb-5 toggle-primary"
        checked={!isLightTheme}
        onChange={toggleTheme}
      />
      <Banner></Banner>
      <Services></Services>
      <div>
        <div className="text-3xl  flex justify-center text-left mt-20 font-bold">
          <h1 className="text-[#6419E6] text-left mx-auto">
            Hot <span className="text-red-600">Deals</span>
          </h1>
        </div>
        <div className="lg:max-w-[90%] h-auto md:max-w-[80%] mt-10 mx-auto  text-left justify-center">
          <Slider2></Slider2>
        </div>
      </div>
      <h1 className="text-center text-[#6419E6] mt-20 text-3xl font-bold">
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
