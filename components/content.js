import moment from 'moment-timezone'

const Content = ({ content, isMobile }) => (
  <div className="content"
    style={{
      backgroundImage: `url(${content.imageUrl})`, height: '50%'
      , width: isMobile ? '100%' : '50%'
      , display: isMobile ? 'block' : 'inline-block'
    }}>
    <div className="content_container">
      <div className="content_topic_container">
        <h1 className="text-center content_topic">{content.topic}</h1>
        <h1 className="text-center content_desc">{content.desc}</h1>
      </div>
      <div className="text-center content_posted_date">
        Posted date: {moment(content.posted_date).tz('Asia/Bangkok').format('LL')}
      </div>
    </div>
  </div>
)

export default Content
