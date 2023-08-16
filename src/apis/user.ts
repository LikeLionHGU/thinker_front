import axios from 'axios';

export const getUserApi = async (userId: number) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/user/${userId}`);

  return response.data;
};

export const loginApi = async (userInfo: IloginApiRequest) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/user`, userInfo);
  return response.data;
};

/**
 * @brief 로그인 API 요청 시 전달해야 하는 데이터 타입의 인터페이스
 */

export interface IloginApiRequest {
  id: number;
  name: string;
  email: string;
}

/**
 * @brief 프로필 API 요청 시 응답받는 데이터 타입의 인터페이스
 */

export interface IloginApiResponse {
  memberId: number;
  name: string;
  email: string;
  postList: IPost[];
  postLikeList: any[]; // 비어있으므로 아무 타입으로 지정하였습니다. 필요에 따라서 구체적인 타입을 추가해야 합니다.
  commentList: IComment[];
  bookMarkList: IBookmark[];
}

interface IPost {
  postId: number;
  title: string;
  content: string;
  date: string;
  writer: string;
  totalPostLikeCount: number;
}

interface IComment {
  commentId: number;
  post: IPost;
  commentLikeCount: number;
  content: string;
}

interface IBookmark {
  url: string;
  title: string;
}
