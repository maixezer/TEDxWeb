import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'

import stylesheet from 'styles/application.scss'

const Layout = ({ children, title = 'TEDxCharoenkrung', styles = { height: 'inherit', width: 'inherit', bgColor: '#fff' } }) => (
  <div id="tedx_body">
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initiali-scale=1.0, width=device-width' />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <header id="tedx_header">
      <Navbar />
    </header>
    <main id="tedx_main_container"
      style={{ 'height': styles.height, 'width': styles.width, 'backgroundColor': styles.bgColor, 'display': 'table' }}>
      {children}
    </main>
    <script src="../static/js/jquery-3.2.1.slim.min.js" />
    <script src="../static/js/bootstrap.min.js" />
  </div>
)

export default Layout