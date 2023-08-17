import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRecoilState } from 'recoil';
import { datePickerDate } from 'src/store/atom';

export default function ResponsiveDatePickers() {
  const [date, setDate] = useRecoilState(datePickerDate);

  function convertToYYYYMMDD(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 은 월이 0부터 시작하기 때문입니다.
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}
      >
        {/* <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem> */}
        <DemoItem label="Static variant">
          <StaticDatePicker
            value={dayjs(date)}
            defaultValue={dayjs('2022-01-01')}
            onChange={(newValue) => setDate(newValue.toDate())}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
