import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';

export const AddVideo = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src='/img/iconImg/placeholder-video.png'
          alt="картинка видео"
        />
        <CardContent>
          <Typography>
            добавить фото
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}