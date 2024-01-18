import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import { MovieSvg } from '../../iconSvgComponents/svgIconComponents';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';

export const VideoUpload = (props) => {
  const { difference, positive = false, sx, value } = props;
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              загружено видео
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: positive ? 'success.main' : 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MovieSvg/>
            {/*<SvgIcon>*/}
            {/*  <CurrencyDollarIcon />*/}
            {/*</SvgIcon>*/}
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Добавлено фото за последний месяц
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}
