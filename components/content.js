import moment from 'moment-timezone'
import Link from 'next/link'

const Content = ({ content, isMobile, enabledHover, fromBlog = false }) => (
  <Link href={{ pathname: '/blog', query: { uid: content.uid } }}>
    <div className={`${enabledHover ? 'content has-hover' : 'content'}`}
      style={{
        backgroundImage: `url(${content.imageUrl})`, height: '50%'
        , width: isMobile || fromBlog ? '100%' : '50%'
        , display: isMobile || fromBlog ? 'block' : 'inline-block'
      }}>
      <div className="content_container">
        <div className="content_topic_container">
          <span className="separator"></span>
          <h1 className="text-center content_topic">{content.topic}</h1>
          <h1 className="text-center content_desc">{content.desc}</h1>
          <span className="separator"></span>
        </div>
        <div className="text-center content_posted_date">
          Posted date: {moment(content.posted_date).tz('Asia/Bangkok').format('LL')}
        </div>
      </div>
    </div>
  </Link>
)

export default Content
