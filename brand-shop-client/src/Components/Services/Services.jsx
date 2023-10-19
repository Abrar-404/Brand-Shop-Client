import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-[#6419E6] mt-20 font-bold">
        Our <span className="text-red-600">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 overflow-hidden mx-auto">
        <div
          data-aos="fade-up-right"
          className="justify-center mx-auto flex mt-10"
        >
          <div className="card w-96 bg-slate-600 bg-opacity-20 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/VCc2ZHD/Hertz-Delivers-Header.jpg"
                alt="delivery"
                className="rounded-xl w-[300px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">Fast Delivery</h2>
              <h1 className="text-3xl">🚚</h1>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up-left"
          className="justify-center mx-auto flex mt-10"
        >
          <div className="card w-96 bg-slate-600 bg-opacity-20 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/hX63vyN/car-service.jpg"
                alt="delivery"
                className="rounded-xl w-[300px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">Low Cost Servicing</h2>
              <h1 className="text-3xl">👨‍🔧</h1>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up-right"
          className="justify-center mx-auto flex mt-10"
        >
          <div className="card w-96 bg-slate-600 bg-opacity-20 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/hswHsWd/images.jpg"
                alt="delivery"
                className="rounded-xl w-[300px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">Car Washing</h2>
              <h1 className="text-3xl">💦🚗💦</h1>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up-left"
          className="justify-center mx-auto flex mt-10"
        >
          <div className="card w-96 bg-slate-600 bg-opacity-20 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/QNY7pxJ/0-The-DVLA-issued-the-reminder-on-Twitter.webp"
                alt="delivery"
                className="rounded-xl w-[300px] h-[150px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">License</h2>
              <h1 className="text-3xl">💳</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
