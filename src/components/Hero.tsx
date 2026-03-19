import { ARTIST_LINKS } from '../data/discography'
import StreamingLinks from './StreamingLinks'
import './Hero.css'

function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <div className="hero__sigil">☿</div>
        <h1 className="hero__title">Зеркало Света</h1>
        <StreamingLinks
          appleMusicUrl={ARTIST_LINKS.appleMusic}
          spotifyUrl={ARTIST_LINKS.spotify}
          youtubeMusicUrl={ARTIST_LINKS.youtubeMusic}
          variant="hero"
        />
      </div>
    </header>
  )
}

export default Hero
