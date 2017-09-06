const Partners = ({ content, isMobile }) => (
  <div id="tedx_partners_contents_topic">
    {content.topic}
    <div id="tedx_partners_contents_image">
      { content.imageUrl.map((imageUrl) =>
        <img src={imageUrl} style={{ padding: '10px', width: isMobile ? '80%' : '7.5rem' }}
        className="img-fluid"></img>
      ) }
    </div>
  </div>

)

export default Partners
