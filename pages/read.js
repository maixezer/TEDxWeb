import { Component } from 'react'
import Layout from '../components/layout'

export default class Read extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  calculateStyles() {
    return this.state.isMobile ?
      {
        height: 'auto',
        width: 'auto',
        bgColor: '#fff',
        headerColor: '#fff'
      } :
      {
        height: 'inherit',
        width: 'inherit',
        bgColor: '#fff',
        headerColor: '#fff'
      }
  }

  componentWillUnmount() {
    window.removeEventListener('load', false)
    window.removeEventListener('resize', false)
  }

  componentDidMount() {
    const _self = this
    window.addEventListener('load', () => {
      checkWindowSize()
    }, false)

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
      <Layout styles={this.calculateStyles()} active={{ read: "#fc2e1f" }}>
        This is Read
      </Layout>
    )
  }
}
