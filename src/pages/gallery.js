import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import {Box, Container, Grid} from '@mui/material';
import Head from 'next/head'
import { PhotoUpload } from '../sections/dashboard/photo-upload';
import { VideoUpload} from '../sections/dashboard/video-upload';
import {LastUploadItemGallery} from '../sections/dashboard/last-upload-item-gallery';
import {UploadContent} from '../sections/dashboard/uploadContent';

const testLastUpdateDate = [
    {
      id: 'f69f88012978187a6c12897f',
      ref: 'DEV1049',
      amount: 30.5,
      customer: {
        name: 'Ekaterina Tankova'
      },
      createdAt: 1555016400000,
      status: 'pending'
    },
    {
      id: '9eaa1c7dd4433f413c308ce2',
      ref: 'DEV1048',
      amount: 25.1,
      customer: {
        name: 'Cao Yu'
      },
      createdAt: 1555016400000,
      status: 'delivered'
    },
    {
      id: '01a5230c811bd04996ce7c13',
      ref: 'DEV1047',
      amount: 10.99,
      customer: {
        name: 'Alexa Richardson'
      },
      createdAt: 1554930000000,
      status: 'refunded'
    },
    {
      id: '1f4e1bd0a87cea23cdb83d18',
      ref: 'DEV1046',
      amount: 96.43,
      customer: {
        name: 'Anje Keizer'
      },
      createdAt: 1554757200000,
      status: 'pending'
    },
    {
      id: '9f974f239d29ede969367103',
      ref: 'DEV1045',
      amount: 32.54,
      customer: {
        name: 'Clarke Gillebert'
      },
      createdAt: 1554670800000,
      status: 'delivered'
    },
    {
      id: 'ffc83c1560ec2f66a1c05596',
      ref: 'DEV1044',
      amount: 16.76,
      customer: {
        name: 'Adam Denisov'
      },
      createdAt: 1554670800000,
      status: 'delivered'
    },
    {
      id: 'f69f88012978277a6c12895f',
      ref: 'DEV1050',
      amount: 23.5,
      customer: {
        name: 'Оксана '
      },
      createdAt: 1555016400000,
      status: 'pending'
    },
  {
    id: 'f69f88012978277a6c12893f',
    ref: 'DEV1050',
    amount: 23.5,
    customer: {
      name: 'Оксана '
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: 'f69f88012978277a6c12897f',
    ref: 'DEV1050',
    amount: 23.5,
    customer: {
      name: 'Оксана '
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
]

const Page = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>
          gallery
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='xl'>
          <Grid
            container
            spacing={1}
            columns={5}
            sx={{gap: '50px', justifyContent: 'center'}}
          >
              <Grid
                item={true}
                xs={4}
                sm={2}
                lg={2}
              >
                  <PhotoUpload
                  difference={15}
                  positive={true}
                  sx={{ height: '100%' }}
                  value="?"
                />
              </Grid>
              <Grid
                item={true}
                xs={4}
                sm={2}
                lg={2}
              >
                  <VideoUpload
                    difference={15}
                    positive={true}
                    sx={{ height: '100%' }}
                    value="?"
                  />
              </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            columns={4}
            sx={{mt: 4}}
          >
            <Grid
              item={true}
              xs={4}
              sm={2}
              lg={2}
            >
              <UploadContent/>
            </Grid>
            <Grid
              item={true}
              xs={4}
              sm={2}
              lg={2}
            >
              <LastUploadItemGallery
                orders={testLastUpdateDate}
                sx={{height: 450}}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <h1>gallery</h1>
    </DashboardLayout>
  )
}

// Page.getLayout = (page) => {
//   return (
//     <DashboardLayout>
//       {page}
//     </DashboardLayout>
//     )
// }

export default Page;