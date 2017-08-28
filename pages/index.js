import { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import Layout from '../components/layout'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    configureAnchors({ scrollDuration: 1000 })
  }

  render() {
    return (
      <Layout>
        <ScrollableAnchor id="landing_page">
          <section id="landing-section">
            <div className="section_content_container">
              <h1 className="section_content text-center white">Charoenkrung is a Prosperous City</h1>
            </div>
            <a className="section_link" href="#home_page">
              <span className="scroll_down"></span>
            </a>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id="home_page">
          <section id="home-section">
            
          </section>
        </ScrollableAnchor>
      </Layout>
    )
  }
}
