import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import $ from 'jquery'

import Layout from '../components/layout'
import Carousel from '../components/carousel'

export default class Home extends Component {

  componentWillMount() {
    configureAnchors({ scrollDuration: 1000 })
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      updateStyle(window.location.hash, [$('.icon-bar'), $('.tedx_logo'), $('.tedx_link')])

      function updateStyle(hash, els) {
        els.map((el) => {
          if (hash === '#landing_page') {
            el.removeClass('black')
            el.addClass('white')
            document.getElementById('tedx_header')
              .style.backgroundColor = 'transparent'
          } else {
            el.removeClass('white')
            el.addClass('black')
            document.getElementById('tedx_header')
              .style.backgroundColor = '#fff'
          }
        })
      }
    }, false);
  }

  render() {
    return (
      <Layout>
        <ScrollableAnchor id="landing_page">
          <section id="landing-section">
            <div className="section_content_container">
              <h1 className="section_content text-center white">Charoenkrung is a Prosperous City</h1>
            </div>
            <a className="section_bottom" href="#home_page">
              <span className="scroll_down"></span>
            </a>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id="home_page">
          <section id="home-section">
            <Carousel />
          </section>
        </ScrollableAnchor>
      </Layout>
    )
  }
}
