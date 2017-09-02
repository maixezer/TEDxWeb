import { Component } from 'react'
import Link from 'next/link'

import $ from 'jquery'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: '',
      colorStyle: props.navbarColor
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

  updateActiveNavbarItem() {
    const { active } = this.props

    Object.keys(active).map((a) => {
      const el = document.getElementById(a)
      if (el) {
        el.style.color = active[a]
      }
    })
  }

  componentDidMount() {
    this.updateActiveNavbarItem()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-faded justify-content-center tedx_navbar">
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
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a id="watch" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#" onClick={() => this.navigateTo()}>Watch</a>
              </li>
            </Link>
            <Link prefetch href='/read'>
              <li className="nav-item tedx_menu_item">
                <a id="read" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#" onClick={() => this.navigateTo('read')}>Read</a>
              </li>
            </Link>
            <Link prefetch href='/'>
              <li className="nav-item tedx_menu_item">
                <a id="partners" className={`nav-link tedx_link ${this.state.colorStyle}`} href="#" onClick={() => this.navigateTo()}>Partners</a>
              </li>
            </Link>
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
