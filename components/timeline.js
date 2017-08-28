import { Component } from 'react'

export default class Timeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="tedx_timeline">
        <div id="line">
          <div className="circle">
            <div className="popupSpan">Ready</div>
          </div>
          <div className="circle" style={{ 'left': '50%' }}>
            <div className="popupSpan"></div>
          </div>
          <div className="circle" style={{ 'left': '100%' }}>
            <div className="popupSpan"></div>
          </div>
        </div>
      </div>
    )
  }
}
