import { Component } from 'react'
import $ from 'jquery'
import Layout from '../components/layout'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  contactList() {
    const socials = {
      facebook: {
        link: 'https://www.facebook.com/TEDxCharoenkrung/',
        display: 'Facebook'
      },
      twitter: {
        link: '#',
        display: 'Twitter'
      },
      instagram: {
        link: '#',
        display: 'Instagram'
      },
      email: {
        link: '#',
        display: 'E-mail'
      }
    }

    return (
      <ul style={{ 'listStyleType': 'none', 'padding': 0 }}>
        {Object.keys(socials).map((s, index) => (
          <li key={s}>
            <a href={socials[s]['link']} style={{ 'fontFamily': 'latoRegular' }}>
              {socials[s]['display']}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  calculateStyles() {
    return this.state.isMobile ?
      {
        height: 'auto',
        width: 'auto',
        bgColor: '#b7b7b7'
      } :
      {
        height: 'inherit',
        width: 'inherit',
        bgColor: '#b7b7b7'
      }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', false)
  }

  componentDidMount() {
    const _self = this
    $(() => {
      document.getElementById('tedx_header')
        .style.backgroundColor = '#b7b7b7'

      checkWindowSize()
    })

    window.addEventListener('resize', () => {
      checkWindowSize()
    }, false)

    function checkWindowSize() {
      if (window.innerWidth < 768) {
        _self.setState({ isMobile: true })
      } else {
        _self.setState({ isMobile: false })
      }
    }
  }

  render() {
    return (
      <Layout styles={this.calculateStyles()}>
        <div id="tedx_about_container">
          <div id="tedx_history">
            <div className="head">
              History
            </div>
            <div className="content">
              TEDxCharoenkrung is an independently organized TED event.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris imperdiet sed libero gravida ultrices.
              Mauris lobortis ex vel orci venenatis venenatis.
              Sed vitae vulputate risus, ac hendrerit neque.
              Sed sit amet lectus tortor. Ut ullamcorper congue ante non venenatis.
              Nullam volutpat et orci nec placerat.
              Ut feugiat neque sit amet pharetra scelerisque.
              Vestibulum sodales leo lectus, a sodales metus consectetur sit amet.
              Nam ultrices tempor ante, in rhoncus augue tincidunt sit amet.
            </div>
            <div className="bottom">
              See all our teamates
            </div>
          </div>
          <div id="tedx_contact">
            <div className="head">
              Contact
            </div>
            <div className="content">
              {this.contactList()}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}