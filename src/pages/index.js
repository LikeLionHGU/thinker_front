import { useRouter } from 'next/router';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TodayKeywords from 'src/components/home/TodayKeywords';
import ToggleButton from 'src/components/home/ToggleButton';
import TitleImage from 'src/components/home/TitleImage';
import { useEffect, useState } from 'react';
import { SearchAPI } from 'src/apis/search.ts';
import { useSetRecoilState } from 'recoil';
import { searchResultAtom } from 'src/store/atom';
import GoogleButton from '../auth/GoogleLogin';
import { getAllCommunities } from '/src/apis/post.ts';
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ----------------------------------------------------------------------

export default function Index() {
  const setAnswer = useSetRecoilState(searchResultAtom);
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/dashboard/one');
  //   }
  // });

  async function handleEnterPress(event) {
    if (event.key === 'Enter') {
      // 원하는 동작을 여기에 넣어주세요.
      event.preventDefault();
      await chatGptApi(event.target.value);
      router.push('/idea');
      // console.log(event.target.value);
      // 폼 제출을 막기 위함
    }
  }

  const chatGptApi = async (text) => {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            '너는 유저가 입력하는 말을 가장 관련성이 높은 단일 검색어로만 간결하게 반환하는 챗봇이야.',
        },
        {
          role: 'user',
          content:
            '나는 웹/앱 서비스를 만들려고 하는데 내가 만들려고 하는 서비스가 이미 존재하는 지가 궁금해서 존재하는 지 검색을 통해 알아볼 건데 검색 키워드를 만들어 줘',
        },
        {
          role: 'assistant',
          content: '알겠어요. 어떤 서비스를 만들려고 하시나요??',
        },
        //    {"role": "user", "content": "한동대학교 주변에 인기 있는 맛집들을 알고 싶은데 이런 정보를 모아주는 서비스가 이미 있을까?"}
        // {"role": "user", "content": "노인 분들이 키오스크를 사용할 때 시각적인 불편함을 가지시는데 이걸 해결해주는 서비스가 이미 있을까?"},
        {
          role: 'user',
          content: `${text}`,
          // "동아리의 리쿠르팅 과정을 자동화 시켜주고 모든 동아리들의 활동 정보와 리쿠르팅 정보를 모아볼 수 있는 서비스",
        },
        {
          role: 'assistant',
          content: '알겠어요. 어떤 식으로 키워드를 반환해드리면 될까요??',
        },
        // {"role": "user", "content": "15글자 이하로 만들고 다른 말 필요 없이 키워드만 반환해 줘. 그리고 각각 서비스 라는 말을 붙여서 반환 해줘 이런식으로 세 개를 만들어 줘. 다른 말 말고 넘버링 없이 , 로 구분해서 줘"}
        {
          role: 'user',
          content: '대답 같은 말 하지말고 넘버링 붙여서 3개 반환해 줘.',
        },
      ],
    });

    setAnswer([]);

    const chatgptResponse = await completion.data.choices[0].message.content
      .match(/\d+\.\s(.*?)(?=\n|$)/g)
      ?.map((match) => match.replace(/^\d+\.\s/, ''));
    chatgptResponse?.length > 0 &&
      chatgptResponse?.map((word) => {
        searchUsingWord(word);
      });
  };

  const searchUsingWord = async (word) => {
    console.log(word);
    const searchResult = await SearchAPI(word);
    if (searchResult?.items?.length > 3) {
      setAnswer((prev) => [...prev, ...(searchResult?.items).slice(0, 3)]);
    } else if (searchResult?.items?.length > 0) {
      setAnswer((prev) => [...prev, ...searchResult?.items]);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: 'success.darker',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GoogleButton />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', px: '50px' }}>
        <TitleImage />

        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <ToggleButton />
        </Box>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 700,
            backgroundColor: 'success.dark',
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon sx={{ color: 'success.contrastText' }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'success.contrastText' }}
            placeholder="떠오르는 아이디어를 검색해보세요."
            inputProps={{ 'aria-label': 'search google maps' }}
            onKeyPress={handleEnterPress}
          />
        </Paper>
        <TodayKeywords />
      </Box>
    </Box>
  );
}
