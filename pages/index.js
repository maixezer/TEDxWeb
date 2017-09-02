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
          if (hash === '#landing' || hash === '') {
            el.removeClass('black')
            el.addClass('white')
            document.getElementById('tedx_header')
              .style.backgroundColor = 'transparent'
          } else if (hash === '#home'){
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
