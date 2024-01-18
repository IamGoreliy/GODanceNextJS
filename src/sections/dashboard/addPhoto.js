import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
export const AddPhoto = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src='/img/iconImg/placeholder-image.png'
          alt="добавление картинки"
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