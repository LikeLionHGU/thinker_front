import axios from 'axios';

export const getAllCommunities = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/post`);

  return response.data;
};

export const getOneCommunity = async (userId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/post/${userId}`, {
    cache: 1,
  });

  return response.data;
};

export const writeCommunity = async (post: IWriteCommunityRequest, userId: number) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/post/${userId}`,
    post
  );

  return response.data;
};

interface IWriteCommunityRequest {
  title: string;
  content: string;
}
