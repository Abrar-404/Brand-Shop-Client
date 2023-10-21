import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import bg from '../../assets/images/bg.jpg';

const MainLayout = () => {
  const backBg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: '',
  };

  return (
    <div
      style={backBg}
      className="lg:max-w-[1400px] md:max-w-[768px] max-w-[425px] mx-auto"
    >
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
