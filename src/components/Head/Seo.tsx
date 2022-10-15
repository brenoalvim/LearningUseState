import Head from 'next/head'

interface SEOProps {
  title: any
  description: any
  url_image: any
}

export default function Meta(props: SEOProps) {
  const title = props.title + ' • Next.js'

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@obrenoalvim" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.url_image} />
      </Head>
    </>
  )
}
