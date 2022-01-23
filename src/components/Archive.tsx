import Title from '@/components/Title'
import { FC } from 'react'

const Archive: FC<ArchiveProps> = ({ title }) => (
  <section className='p-8 md:px-12 xl:px-16'>
    <Title tag='h2' className='mb-2'>
      {title}
    </Title>
    <p>This website doesn't pretend to be.</p>
  </section>
)

type ArchiveProps = {
  title: string
  children?: undefined
}

export default Archive