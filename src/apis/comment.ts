import axios from 'axios';

export const addComment = async (userId, postId, data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/add/comment/${userId}/${postId}`,
    data
  );

  return response;
};

export const addLikeComment = async (commentId, userId) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/like/comment/${commentId}/${userId}`
  );

  return response;
};

export const deleteLikeComment = async (commentId, userId) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SPRING_URL}/api/like/comment/${commentId}/${userId}`
  );

  return response;
};
