import { brand } from '../config/site'

function Story() {
  return (
    <section id="story" className="section section-alt">
      <div className="container story">
        <div className="story-media">
          <div className="story-frame">
            <img className="story-img" src={`${import.meta.env.BASE_URL}images/products/shawl-2.jpg`} alt="Shezreen hand-embroidered shawl" />
          </div>
        </div>
        <div className="story-body">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title">{brand.storyTitle}</h2>
          <p className="story-text">{brand.story}</p>
          <p className="story-text">{brand.storyBody}</p>
          <p className="story-sign">— {brand.name}</p>
        </div>
      </div>
    </section>
  )
}

export default Story
