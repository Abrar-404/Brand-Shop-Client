import Footer from '../Footer/Footer';
import Banner from '../Layouts/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>

      <Banner></Banner>
      <Services></Services>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
