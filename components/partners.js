const Partners = ({ content, isMobile }) => (
  <div id="tedx_partners_contents_topic">
    {content.topic}
    <div id="tedx_partners_contents_image">
      { content.imageUrl.map((imageUrl) =>
        <img src={imageUrl} style={{ width: isMobile ? '7.5rem' : '7.5rem'
          , display: isMobile ? 'block' : 'inline-flex'
        }} className="img-thumbnail"></img>
      ) }
    </div>
  </div>

)

export default Partners
