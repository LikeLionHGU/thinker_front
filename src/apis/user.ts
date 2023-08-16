import axios from 'axios';

export const getUser = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/user/${userId}`);

  return response.data;
};
