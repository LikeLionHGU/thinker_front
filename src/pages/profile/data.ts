export const member = {
  memberId: 1,
  name: 'kimDongGyu',
  email: 'kdg1941@handong.ac.kr',
  postList: [
    {
      postId: 1,
      title: 'It is a title',
      content: 'It is a 이얏! test',
      date: '2023-08-12T20:13:34.274252',
      writer: 'kimDongGyu',
      totalPostLikeCount: 0,
    },
    {
      postId: 2,
      title: 'It is a title',
      content: 'It is a 이얏! test',
      date: '2023-08-12T20:21:53.254256',
      writer: 'kimDongGyu',
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
        content: 'It is a 이얏! test',
        date: '2023-08-12T20:13:34.274252',
        writer: 'kimDongGyu',
      },
      commentLikeCount: 0,
      content: 'I think it looks good~!',
    },
    {
      commentId: 2,
      post: {
        postId: 1,
        title: 'It is a title',
        content: 'It is a 이얏! test',
        date: '2023-08-12T20:13:34.274252',
        writer: 'kimDongGyu',
      },
      commentLikeCount: 0,
      content: 'I think it looks good~!',
    },
    {
      commentId: 3,
      post: {
        postId: 1,
        title: 'It is a title',
        content: 'It is a 이얏! test',
        date: '2023-08-12T20:13:34.274252',
        writer: 'kimDongGyu',
      },
      commentLikeCount: 0,
      content: 'I think it looks good~!',
    },
  ],
};
