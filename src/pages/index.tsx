import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import GlobalStyle from './global'

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name="Home" />
      <GlobalStyle />
      <h1></h1>
    </>
  )
}
