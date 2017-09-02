import { Component } from 'react'
import $ from 'jquery'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  carouselItems() {
    const path = this.state.isMobile ? 'mobile' : 'desktop'
    const items = [
      {
        imageUrl: `static/images/${path}/home_bg.jpg`,
        topic: 'Charoenkrung Road',
        desc: 'กรุงเจริญ = เจริญกรุง'
      },
      {
        imageUrl: 'static/images/contents/bg_01.jpg',
        topic: 'Lalalala',
        desc: 'ลาลาลาลา'
      },
      {
        imageUrl: 'static/images/contents/bg_02.jpg',
        topic: 'Why Charoenkrung?',
        desc: 'ทำไมต้องเจริญกรุง'
      },
      {
        imageUrl: 'static/images/contents/bg_03.jpg',
        topic: 'Everything has its first time...',
        desc: 'ครั้งแรกของ TED'
      }
    ]

    return items.map((item, index) => (
      <div key={index} className={`carousel-item ${index === 1 ? 'active' : ''} bg_plus_pos_y`}
        style={{ 'backgroundImage': `url(${item.imageUrl})` }}>
        <div className="slide_content_container">
          <h1 className="text-center slide_content_topic">{item.topic}</h1>
          <h1 className="text-center slide_content_desc">{item.desc}</h1>
        </div>
      </div>
    ))
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
      <div className="home_section_slide">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {this.carouselItems()}
          </div>
        </div>
      </div>
    )
  }
} 
