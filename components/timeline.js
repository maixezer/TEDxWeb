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
            <div className="popupSpan" id="ready">READY</div>
          </div>
          <div className="circle" style={{ 'left': '50%' }}>
            <div className="popupSpan" id="set">SET</div>
          </div>
          <div className="circle" style={{ 'left': '100%' }}>
            <div className="popupSpan" id="grow">GROW</div>
          </div>
        </div>
      </div>
    )
  }
}
