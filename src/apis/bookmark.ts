import axios from 'axios';

interface IData {
  userId: string;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const addBookmark = async (userId, url, title, description, imageUrl) => {
  const data = {
    imageUrl,
    url,
    title,
    description,
  };

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/bookmark/add/${userId}`,
    data
  );

  return response.data;
};

export const deleteBookmark = async (userId, url) => {
  const data = {
    url,
  };
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/bookmark/delete/${userId}`,
    data
  );
  return response.data;
};
