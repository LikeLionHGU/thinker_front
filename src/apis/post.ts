import axios from 'axios';

export const getAllCommunities = async (userId: number) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/post/${userId}`, {});

  return response.data;
};
