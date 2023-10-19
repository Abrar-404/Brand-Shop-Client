
import SingleCardDetail from './SingleCardDetail';
import Slider from './Slider';

const CardDetails = ({ bring }) => {

  console.log(bring);
  return (
    <>
      <Slider></Slider>
      <div className="grid grid-cols-1 gap-5 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-2">
        {bring?.map(brand => (
          <SingleCardDetail key={brand.id} brand={brand}></SingleCardDetail>
        ))}
      </div>
      <div className="text-center w-full flex mx-auto justify-center">
        {bring?.length === 0 ? (
          <div>
            <p className="text-white font-bold -mt-[50px] text-3xl w-full text-center mx-auto flex justify-center">
              OOPS!!....... <br />
              No Products Available Right Now
            </p>
            <img
              src="https://i.ibb.co/frY869C/output-onlinegiftools-1.gif"
              alt=""
              className="-mt-[70px]"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default CardDetails;
