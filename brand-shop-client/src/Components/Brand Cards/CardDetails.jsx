import SingleCardDetail from './SingleCardDetail';
import Slider from './Slider';

const CardDetails = ({ bring }) => {
  const {
    image1,
    image2,
    image3,
    image4,
    brandName1,
    brandName2,
    brandName3,
    brandName4,
  } = bring || {};
  console.log(bring);
  return (
    <>
      <Slider></Slider>
      <div className="grid grid-cols-1 gap-5 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-2">
        {bring?.map(brand => (
          <SingleCardDetail key={brand.id} brand={brand}></SingleCardDetail>
        ))}
      </div>
      <div className="text-center w-full flex mx-auto  justify-center">
        {bring?.length === 0 ? (
          <p className="text-white text-3xl w-full text-center  mx-auto flex justify-center">
            No Products
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default CardDetails;
