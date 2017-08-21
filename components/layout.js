import Head from 'next/head'
import Navbar from './navbar'

import stylesheet from 'styles/application.scss'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initiali-scale=1.0, width=device-width' />
      <link rel="stylesheet" type="text/css" href="/static/fonts.css" />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <header> 
      <Navbar />
    </header>
    { children }
  </div>
)