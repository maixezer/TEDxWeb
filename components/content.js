import moment from 'moment-timezone'
import Link from 'next/link'
import { translate } from 'react-i18next'

const Content = ({ content, isMobile, enabledHover, fromBlog = false, lng }) => (
  <Link href={{ pathname: '/blog', query: { uid: content.uid, lng: lng} }}>
    <div className={fromBlog ? 'content' : 'content has-hover'}
      style={{
        height: fromBlog ? (isMobile ? '40%' : '800px') : '50%',
        width: isMobile || fromBlog ? '100%' : '50%',
        display: isMobile || fromBlog ? 'block' : 'inline-block'
      }}>
      {fromBlog ?
        (
          <div style={{ position: 'relative' }}>
            <div className="image_content_container" style={{
              backgroundImage: `url(${content.image.url})`
            }}>
            </div>
            <div className="image_content_topic_container">
              <div className="image_content">
                <span className="separator top"></span>
                <h1 className="text-center content_topic">{content.image.topic}</h1>
                <h1 className="text-center content_desc">{content.image.desc}</h1>
                <span className="separator bottom"></span>
                <h2 className="text-center topic_date">
                  Posted date: {moment(content.postedDate).tz('Asia/Bangkok').format('LL')}
                </h2>
              </div>
            </div>
          </div>
        )
        :
        (
          <div style={{ position: 'relative' }}>
            <div className="image_content_container" style={{
              backgroundImage: `url(${content.image.url})`
            }}>
            </div>
            <div className="image_content_topic_container">
              <div className="image_content">
                <h1 className="text-center content_topic">{content.image.topic}</h1>
                <h1 className="text-center content_desc">{content.image.desc}</h1>
              </div>
            </div>
            <div className="text-center content_posted_date">
              Posted date: {moment(content.postedDate).tz('Asia/Bangkok').format('LL')}
            </div>
          </div>
        )}

    </div>
  </Link>
)

export default translate()(Content)
