import { Component } from 'react'
import Link from 'next/link'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: '' }
  }

  toggleHamburger() {
    const isOpen = this.state.isOpen
    this.setState({
      isOpen: isOpen ? '' : 'open'
    })
  }

  isOpen() {
    return this.state.isOpen
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-faded justify-content-center tedx_navbar">
        <Link prefetch href='/'>
          <a className="tedx_logo navbar-brand mr-auto" href="#">
            <span className="sr-only">TEDxCharoenkrung</span>
          </a>
        </Link>
        <button className="navbar-toggler tedx_hamburger_button" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation" onClick={() => this.toggleHamburger()}>
          {/* <span className="navbar-toggler-icon tedx_hamburger_icon"></span> */}
          <div id="tedx_hamburger_icon" className={this.isOpen()}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </button>
        <div className={`collapse navbar-collapse ${this.isOpen() ? 'show': ''}`} id="navbarNav">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <Link prefetch href='/watch'>
              <li className="nav-item tedx_menu_item">
                <a className="nav-link tedx_link" href="#" onClick={() => this.toggleHamburger()}>Watch</a>
              </li>
            </Link>
            <Link prefetch href='/read'>
              <li className="nav-item tedx_menu_item">
                <a className="nav-link tedx_link" href="#" onClick={() => this.toggleHamburger()}>Read</a>
              </li>
            </Link>
            <Link prefetch href='/partners'>
              <li className="nav-item tedx_menu_item">
                <a className="nav-link tedx_link" href="#" onClick={() => this.toggleHamburger()}>Partners</a>
              </li>
            </Link>
            <Link prefetch href='/about'>
              <li className="nav-item tedx_menu_item">
                <a className="nav-link tedx_link" href="#" onClick={() => this.toggleHamburger()}>About</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
