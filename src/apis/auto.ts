import axios from 'axios';

export const autoGptApi = async (mode: string, url: string) => {
  const response = await axios.get(`http://115.85.183.122:5000/${mode}/get?data=${url}`);
  return response.data;
};

// export const dynamicAutoGptApi = async (ip: string, mode: string, url: string) => {
//   const response = await axios.get(`http://${ip}:5000/${mode}/get?data=${url}`);
//   return response.data;
// };

// export const getIp = async () => {
//   const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/auto/gpt/get`);

//   return response.data;
// };

// export const postIp = async (ip: string) => {
//   const response = await axios.post(
//     `${process.env.NEXT_PUBLIC_SPRING_URL}/api/auto/gpt/return/${ip}`
//   );

//   return response.data;
// };
