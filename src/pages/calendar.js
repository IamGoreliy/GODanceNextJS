import {Layout as DashboardLayout} from '../layouts/dashboard/layout';
import Head from 'next/head';
const Page = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>
          calendar
        </title>
      </Head>
      <h1>Calendar</h1>
    </DashboardLayout>
  )
}

export default Page;