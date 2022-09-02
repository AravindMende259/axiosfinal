import { useEffect } from 'react';
import authFetch from '../axios/customaxios';
import axios from 'axios'
// const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
   try{
const resp1=await authFetch('/react-store-products');
const resp2=await axios.get(randomUserUrl);
console.log(resp1);
console.log(resp2);
   }
   catch(error){
    console.log(error.response());
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Custom  instance</h2>;
};
export default CustomInstance;
