import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import {useState} from 'react';

export const AccountProfile = ({userData}) => {
  const [user, setUser] = useState({
    avatar: userData?.avatar ?? '/assets/avatars/avatar-anika-visser.png',
    city: userData?.city !== 'not indicated' ? userData?.city : `City - ${userData?.city} `,
    country: userData?.country !== 'not indicated' ? userData?.country : `Country - ${userData?.country}`,
    jobTitle: 'Senior Developer',
    name: userData?.name !== 'not indicated' ? userData?.name : 'anonymous',
    timezone: 'GTM-7'
  });
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city}
            {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
}
