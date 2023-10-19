import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 mt-20 bg-slate-700 bg-opacity-30 text-neutral-content">
        <aside>
          <div className="flex gap-10 items-center">
            <img
              className="max-w-[200px] max-h-[100px] rounded-full"
              src="https://i.ibb.co/9wnHhnv/7f5e1343790085-57fcf9c4adf85.gif"
              alt=""
            />
            <div>
              <p className="text-white lg:text-base md:text-xl font-semibold text-xs">
                {' '}
                We Are Here to Provide You Your <br /> Desired Ride
              </p>
            </div>
          </div>
        </aside>
        <nav className="flex lg:justify-end md:justify-end justify-center mx-auto">
          <div>
            <header className="text-xl font-bold text-white">
              Contact <span className="text-red-600">Us</span>
            </header>
            <div className="flex items-center gap-5">
              <div className="grid text-white text-lg grid-flow-col gap-4">
                <FaFacebookSquare></FaFacebookSquare>
              </div>
              <div className="text-white text-lg">
                {' '}
                <FaTwitter></FaTwitter>
              </div>
              <div className="text-white text-lg">
                {' '}
                <FaDiscord></FaDiscord>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
