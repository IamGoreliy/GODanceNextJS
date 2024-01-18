import { AddVideo } from './addVideo';
import {AddPhoto} from './addPhoto';
import StaticDateTimePickerLandscape from './calendar'
import { Container, Grid } from '@mui/material';

export const UploadContent = () => {
  return (
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1}
          columns={4}
        >
          <Grid
            item={true}
            xs={4}
            sm={2}
            lg={2}
          >
            <AddPhoto/>
          </Grid>
          <Grid
            item={true}
            xs={4}
            sm={2}
            lg={2}
          >
            <AddVideo/>
          </Grid>
        </Grid>
        <Grid
          sx={{mt: 2}}
        >
          <Grid>
            <StaticDateTimePickerLandscape/>
          </Grid>
        </Grid>
      </Container>
  )
}