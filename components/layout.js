import Head from 'next/head'
import Navbar from './navbar'

import stylesheet from 'styles/application.scss'

export default ({ children, title = 'TEDxCharoenkrung' }) => (
  <div id="tedx_body">
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initiali-scale=1.0, width=device-width' />
      <link rel="stylesheet" type="text/css" href="/static/fonts.css" />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <header id="tedx_header">
      <Navbar />
    </header>
    <main id="tedx_main_container">
      {children}
    </main>
    <script src="/static/js/jquery-3.2.1.slim.min.js" />
    <script src="/static/js/bootstrap.min.js" />
  </div>
)