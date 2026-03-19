import { Release } from '../types'
import TrackList from './TrackList'
import StreamingLinks from './StreamingLinks'
import './ReleaseCard.css'

interface ReleaseCardProps {
  release: Release;
  index: number;
}

const TYPE_LABELS: Record<Release['type'], string> = {
  album: 'Альбом',
  ep: 'EP',
  live: 'Концертный',
};

function ReleaseCard({ release, index }: ReleaseCardProps) {
  return (
    <article
      className="release-card"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="release-card__header">
        <div className="release-card__cover">
          {release.coverImage ? (
            <img
              className="release-card__cover-img"
              src={release.coverImage}
              alt={release.title}
              loading="lazy"
            />
          ) : (
            <span className="release-card__cover-text">
              {release.title.charAt(0)}
            </span>
          )}
        </div>

        <div className="release-card__info">
          <div className="release-card__meta">
            <span className="release-card__badge">{TYPE_LABELS[release.type]}</span>
            <span className="release-card__year">{release.year}</span>
          </div>
          <h3 className="release-card__title">{release.title}</h3>
        </div>

        <div className="release-card__actions">
          <StreamingLinks
            appleMusicUrl={release.appleMusicUrl}
            spotifyUrl={release.spotifyUrl}
            youtubeMusicUrl={release.youtubeMusicUrl}
            variant="card"
          />
        </div>
      </div>

      <div className="release-card__body">
        <TrackList tracks={release.tracks} />
      </div>
    </article>
  );
}

export default ReleaseCard
