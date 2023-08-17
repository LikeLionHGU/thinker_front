import axios from 'axios';

export const getAllCommunities = async (userId: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/post/${userId}`);

  return response.data;
};

export const getOneCommunity = async (userId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/post/${userId}`, {
    cache: 'no-store',
  });

  return response.json();
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

export const addPostLike = (postId, userId) => {
  const response = axios.post(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/like/post/${postId}/${userId}`
  );

  return response;
};

export const deletePostLike = (postId, userId) => {
  const response = axios.delete(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/like/post/${postId}/${userId}`
  );

  return response;
};
