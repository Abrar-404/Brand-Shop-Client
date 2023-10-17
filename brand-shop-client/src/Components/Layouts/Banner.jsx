import banner from '../../assets/images/banner.jpg';
import lam1 from '../../assets/images/lam1.png';
import lam2 from '../../assets/images/lam2.png';

const Banner = () => {
  const bannerBg = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div>
      <div style={bannerBg} className="w-full">
        <div className="pt-44 mx-auto flex justify-end mr-16 mb-20">
          <div>
            <h1 className="text-4xl font-bold text-white ">
              Grab you <span className="text-red-600">DREAM</span>
            </h1>
            <h1 className="text-white font-semibold text-3xl">
              We are here to provide you
            </h1>
            <h1 className="text-white font-semibold text-3xl">Our best deal</h1>
          </div>
        </div>

        <div className="ml-20 pb-10">
          <div>
            <h1 className="text-white font-semibold mt-10 text-6xl">
              Lamborghini{' '}
              <span className="text-red-600 font-bold text-3xl">Revuelto</span>
            </h1>

            <h1 className="text-3xl text-white font-bold">Model 2015</h1>
          </div>

          <div className="mx-auto">
            <label className="swap swap-flip text-9xl">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              <div className="swap-on">
                <img className="w-[150px] h-[80px]" src={lam1} alt="" />
              </div>
              <div className="swap-off">
                <img className="w-[150px] h-[80px]" src={lam2} alt="" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
