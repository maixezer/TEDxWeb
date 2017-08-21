import Head from 'next/head'
import Navbar from './navbar'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initiali-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/fonts.css"/>
    </Head>
    <header>
      <Navbar />
    </header>

    { children }
  </div>
)