import Head from 'next/head'
import { Component } from 'react'
import Navbar from './navbar'
import { initGA, logPageView } from '../utils'

import stylesheet from 'styles/application.scss'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { 
      children, 
      isMobile, 
      navbarColor,
      currentPage, 
      styles = { height: 'inherit', width: 'inherit', bgColor: '#fff', headerColor: 'transparent' },
      router
    } = this.props
    return (
      <div id="tedx_body">
        <Head>
          <title>TEDxCharoenkrung</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initiali-scale=1.0, width=device-width' />
          <link rel="icon" href="static/icons/tedx.ico" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <header id="tedx_header" style={{ 'backgroundColor': styles.headerColor }}>
          <Navbar currentPage={currentPage} isMobile={isMobile} navbarColor={navbarColor} router={router}/>
        </header>
        <main id="tedx_main_container"
          style={{
            height: styles.height,
            width: styles.width,
            backgroundColor: styles.bgColor,
            display: 'table'
          }}>
          {children}
        </main>
        <script src="../static/js/jquery-3.2.1.slim.min.js" />
        <script src="../static/js/bootstrap.min.js" />
      </div>
    )
  }
}

// const Layout = ({ children, isMobile, navbarColor, currentPage, styles = { height: 'inherit', width: 'inherit', bgColor: '#fff', headerColor: 'transparent' } }) => (

// )

// export default Layout