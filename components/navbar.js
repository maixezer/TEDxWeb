import { Component } from 'react'
import Link from 'next/link'

import $ from 'jquery'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: '',
      colorStyle: props.navbarColor,
      currentPage: props.currentPage
    }
  }

  navigateTo(page) {
    this.toggleHamburger()
  }

  toggleHamburger() {
    const isOpen = this.state.isOpen
    this.setState({
      isOpen: isOpen ? '' : 'open'
    })
  }

  componentWillUnmount() {
    $(`#${this.state.currentPage}`).removeClass('active')
  }

  componentDidMount() {
    $(`#${this.state.currentPage}`).addClass('active')
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-faded justify-content-center tedx_navbar">
        {console.warn(this.state.currentPage)}
        <Link prefetch href='/'>
          <a className={`tedx_logo navbar-brand mr-auto ${this.state.colorStyle}`} href="#"
            onClick={() => this.navigateTo()} >
            <span className="sr-only">TEDxCharoenkrung</span>
          </a>
        </Link>
        <button className="navbar-toggler tedx_hamburger_button" type="button"
          onClick={() => this.toggleHamburger()}>
          <div id="tedx_hamburger_icon" className={this.state.isOpen}>
            <span className={`icon-bar ${this.state.colorStyle}`}></span>
            <span className={`icon-bar ${this.state.colorStyle}`}></span>
            <span className={`icon-bar ${this.state.colorStyle}`}></span>
          </div>
        </button>
        <div className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item tedx_menu_item">
              <a id="watch" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#">Watch</a>
            </li>
            <Link prefetch href='/read'>
              <li className="nav-item tedx_menu_item">
                <a id="read" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#" onClick={() => this.navigateTo('read')}>Read</a>
              </li>
            </Link>
            <li className="nav-item tedx_menu_item">
              <a id="partners" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#">Partners</a>
            </li>
            <Link prefetch href='/about'>
              <li className="nav-item tedx_menu_item">
                <a id="about" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#" onClick={() => this.navigateTo('about')}>About</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
