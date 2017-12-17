
const Speakers = ({ content, isMobile }) => (
  <div id="tedx_speakers_contents_name">
    {content.name}
    <div id="tedx_speakers_red_line">
    </div>
    <div id="tedx_speakers_contents_description">
    {content.description}
    </div>
    <div id="tedx_speakers_contents_image">
      <figure>
        <img src={content.image} style={{ width: isMobile ? '80%' : 'auto' }}
        className="img-fluid"></img>
      </figure>
    </div>
  </div>

)

export default Speakers
