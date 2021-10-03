import { ReactElement } from 'react'

import Layout from '../components/layout'

function Home() {
  return <div>Home Page</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
