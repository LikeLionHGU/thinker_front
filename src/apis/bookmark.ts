import axios from 'axios';

interface IData {
  userId: string;
  url: string;
  title: string;
  description: string;
  image: string;
}

export const addBookmark = async ({ userId, url, title, description, image }: IData) => {
  const data = {
    imageUrl: image,
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
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/bookmark/delete${11787}`,
    { url }
  );
  return response;
};
