import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SeeDetails from "./SeeDetails";

const DetailLoader = () => {
    const [bringDetail, setBringDetail] = useState([]);
  const bringAllDetails = useLoaderData();
  
  const { brandName } = useParams();

  useEffect(() => {
    const bringDataDetail = bringAllDetails?.filter(
      bring => bring?.brandName === brandName
    );
    setBringDetail(bringDataDetail);
  }, [brandName, bringAllDetails]);
  return (
   <SeeDetails bringDetail={bringDetail}></SeeDetails>
  );
};

export default DetailLoader;