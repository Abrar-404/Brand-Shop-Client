import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';
const CardLoader = () => {
  const [bring, setBring] = useState([]);
  const bringAll = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  useEffect(() => {
    const bringData = bringAll?.find(bring => bring.id === idInt);
    setBring(bringData);
  }, [idInt, bringAll]);

  console.log(bring);

  return <CardDetails bring={bring}></CardDetails>;
};

export default CardLoader;
