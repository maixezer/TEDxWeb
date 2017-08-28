import { Component } from 'react'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false
    }
  }

  carouselItems() {
    const path = this.state.isMobile ? 'mobile' : 'desktop'
    const itemImages = [
      `static/images/${path}/home_bg.jpg`,
      `static/images/${path}/home_bg.jpg`,
      `static/images/${path}/home_bg.jpg`,
      `static/images/${path}/home_bg.jpg`,
      `static/images/${path}/home_bg.jpg`
    ]

    return itemImages.map((image, index) => (
      <div key={index} className={`carousel-item ${index === 1 ? 'active' : ''} bg_plus_pos_y`}
        style={{ 'backgroundImage': `url(${image})` }}>
        <div className="slide_content_container">
          <h1 className="text-center slide_content_topic">Charoenkrung Road</h1>
          <h1 className="text-center slide_content_desc">กรุงเจริญ = เจริญกรุง</h1>
        </div>
      </div>
    ))
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.setState({ isMobile: true })
      } else {
        this.setState({ isMobile: false })
      }
    }, false)
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
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {this.carouselItems()}
          </div>
        </div>
      </div>
    )
  }
} 
