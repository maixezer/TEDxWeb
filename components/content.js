import moment from 'moment-timezone'
import Link from 'next/link'

const Content = ({ content, isMobile, enabledHover, fromBlog = false }) => (
  <Link href={{ pathname: '/blog', query: { uid: content.uid } }}>
    <div className={`${enabledHover ? 'content has-hover' : 'content'}`}
      style={{
        backgroundImage: `url(${content.image.url})`,
        height: fromBlog ? (isMobile ? '30%' : '800px') : '50%',
        width: isMobile || fromBlog ? '100%' : '50%',
        display: isMobile || fromBlog ? 'block' : 'inline-block'
      }}>
      {fromBlog ?
        (
          <div className="image_content_container">
            <div className="content_topic_container">
              <span className="separator top"></span>
              <h1 className="text-center content_topic">{content.image.topic}</h1>
              <h1 className="text-center content_desc">{content.image.desc}</h1>
              <span className="separator bottom"></span>
              <span className="text-center topic_date">
                Posted date: {moment(content.postedDate).tz('Asia/Bangkok').format('LL')}
              </span>
            </div>
          </div>
        )
        :
        (
          <div className="image_content_container">
            <div className="content_topic_container">
              <h1 className="text-center content_topic">{content.image.topic}</h1>
              <h1 className="text-center content_desc">{content.image.desc}</h1>
            </div>
            <div className="text-center content_posted_date">
              Posted date: {moment(content.postedDate).tz('Asia/Bangkok').format('LL')}
            </div>
          </div>
        )}

    </div>
  </Link>
)

export default Content
