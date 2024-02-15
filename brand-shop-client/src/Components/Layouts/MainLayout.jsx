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
    <div style={backBg}>
      <div>
        <Navbar></Navbar>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
