import { Component } from 'react'
import Link from 'next/link'

import $ from 'jquery'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: '',
      colorStyle: ''
    }
  }

  navigateTo(page) {
    this.setState({
      colorStyle: page ? 'black' : 'white'
    })
    this.toggleHamburger()
  }


  toggleHamburger() {
    const isOpen = this.state.isOpen
    this.setState({
      isOpen: isOpen ? '' : 'open'
    })
  }

  updateStyle() {
    return this.state.colorStyle
  }

  componentDidMount() {
    const location = window.location
    this.setState({
      colorStyle: location.pathname !== '/' || location.hash === '#home_page' ? 'black' : 'white'
    })

    window.addEventListener("hashchange", () => {
      updateStyle(window.location.hash, [$('.icon-bar'), $('.tedx_logo'), $('.tedx_link')])

      function updateStyle(hash, els) {
        els.map((el) => {
          if (hash === '#landing_page') {
            el.removeClass('black')
            el.addClass('white')
          } else {
            el.removeClass('white')
            el.addClass('black')
          }
        })
      }
    }, false);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-faded justify-content-center tedx_navbar">
        <Link prefetch href='/'>
          <a className={`tedx_logo navbar-brand mr-auto ${this.updateStyle()}`} href="#"
            onClick={() => this.navigateTo()} >
            <span className="sr-only">TEDxCharoenkrung</span>
          </a>
        </Link>
        <button className="navbar-toggler tedx_hamburger_button" type="button"
          onClick={() => this.toggleHamburger()}>
          <div id="tedx_hamburger_icon" className={this.state.isOpen}>
            <span className={`icon-bar ${this.updateStyle()}`}></span>
            <span className={`icon-bar ${this.updateStyle()}`}></span>
            <span className={`icon-bar ${this.updateStyle()}`}></span>
          </div>
        </button>
        <div className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a className={`nav-link tedx_link ${this.updateStyle()}`} href="#" onClick={() => this.navigateTo()}>Watch</a>
              </li>
            </Link>
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a className={`nav-link tedx_link ${this.updateStyle()}`} href="#" onClick={() => this.navigateTo()}>Read</a>
              </li>
            </Link>
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a className={`nav-link tedx_link ${this.updateStyle()}`} href="#" onClick={() => this.navigateTo()}>Partners</a>
              </li>
            </Link>
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a className={`nav-link tedx_link ${this.updateStyle()}`} href="#" onClick={() => this.navigateTo()}>About</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
