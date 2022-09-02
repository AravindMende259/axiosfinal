import { useEffect } from 'react';
import authFetch from '../axios/interceptor'
const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
   const resp=await authFetch('/react-store-products')
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;