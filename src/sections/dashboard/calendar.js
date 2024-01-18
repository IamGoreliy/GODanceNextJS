import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
import {Card} from '@mui/material/Card';
import styled from '@emotion/styled';
import { lightBlue } from '@mui/material/colors'

const colorCardCalendar = lightBlue[50]

const CalendarWrapper = styled.div`
  width: auto;
  height: auto;
  border-radius: 20px;
`
const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};
export default function StaticDateTimePickerLandscape() {
  const [startDate, setStartDate] = useState(moment())
  return (
    <CalendarWrapper>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker
          sx={{borderRadius: '20px', backgroundColor: colorCardCalendar }}
          orientation="landscape"
          openTo="day"
          value={startDate}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          // slotProps={{ textField: { variant: 'outlined' } }}
        />
      </LocalizationProvider>
    </CalendarWrapper>
  );
}