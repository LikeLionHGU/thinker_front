export const member = {
  memberId: 123,
  name: 'KimDongGyu',
  email: 'kdg1941@handong.ac.kr',
  postList: [
    {
      postId: 1,
      title: 'It is a title',
      content: 'It is a 이얏! test++++++++++',
      date: '2023-08-15T03:30:14.06638',
      writer: 'KimDongGyu',
      totalPostLikeCount: 0,
    },
  ],
  postLikeList: [],
  commentList: [
    {
      commentId: 1,
      post: {
        postId: 1,
        title: 'It is a title',
        content: 'It is a 이얏! test++++++++++',
        date: '2023-08-15T03:30:14.06638',
        writer: 'KimDongGyu',
      },
      commentLikeCount: 1,
      content: 'I think it looks good~!',
    },
  ],
  bookMarkList: [
    { url: 'http://test.c11111om', title: 'testTitle~!' },
    { url: 'http://test.com', title: 'testTitle~!' },
  ],
};
