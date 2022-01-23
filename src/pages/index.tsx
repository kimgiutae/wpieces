import Layout from '@/components/Layout'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const HomePage: FC<HomePage> = ({ name }) => (
  <Layout>
    <h1>Home Page</h1>
  </Layout>
)

type HomePage = PageProps & {}

export default HomePage
