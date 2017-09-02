import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import $ from 'jquery'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLanding: true
    }
  }

  calculateStyles() {
    return this.state.isLanding ?
      {
        height: 'inherit',
        width: 'inherit',
        bgColor: 'transparent',
        headerColor: 'transparent'
      } :
      {
        height: 'inherit',
        width: 'inherit',
        bgColor: '#fff',
        headerColor: '#fff'
      }
  }

  componentWillMount() {
    configureAnchors({ scrollDuration: 1000 })
  }

  componentWillUnmount() {
    window.removeEventListener("load", false)
    window.removeEventListener("hashchange", false)
  }

  componentDidMount() {
    const _self = this

    window.addEventListener("load", () => {
      updateStyle(window.location.hash, [$('.icon-bar'), $('.tedx_logo'), $('.tedx_link')])
    }, false)

    window.addEventListener("hashchange", () => {
      updateStyle(window.location.hash, [$('.icon-bar'), $('.tedx_logo'), $('.tedx_link')])
    }, false);

    function updateStyle(hash, els) {
      els.map((el) => {
        if (hash === '#landing' || hash === '') {
          el.removeClass('black')
          el.addClass('white')
          _self.setState({ isLanding: true })
        } else if (hash === '#home') {
          el.removeClass('white')
          el.addClass('black')
          _self.setState({ isLanding: false })
        }
      })
    }
  }

  render() {
    return (
      <Layout styles={this.calculateStyles()}>
        <ScrollableAnchor id="landing">
          <section id="landing-section">
            <div className="section_content_container">
              <h1 className="section_content text-center white">Charoenkrung is a Prosperous City</h1>
            </div>
            <a className="section_bottom" href="#home">
              <span className="scroll_down"></span>
            </a>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id="home">
          <section id="home-section">
            <Carousel />
          </section>
        </ScrollableAnchor>
      </Layout>
    )
  }
}
