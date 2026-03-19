import { useState } from 'react'
import { Track } from '../types'
import './TrackItem.css'

interface TrackItemProps {
  track: Track;
}

function TrackItem({ track }: TrackItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasLyrics = Boolean(track.lyrics);

  return (
    <div className={`track-item ${expanded ? 'track-item--expanded' : ''}`}>
      <button
        className="track-item__row"
        onClick={hasLyrics ? () => setExpanded(!expanded) : undefined}
        aria-expanded={hasLyrics ? expanded : undefined}
        disabled={!hasLyrics}
      >
        <span className="track-item__number">{String(track.number).padStart(2, '0')}</span>
        <span className="track-item__title">{track.title}</span>
        <span className="track-item__duration">{track.duration}</span>
        {hasLyrics && (
          <span className={`track-item__expand ${expanded ? 'track-item__expand--open' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </button>

      {hasLyrics && (
        <div className={`track-item__lyrics ${expanded ? 'track-item__lyrics--open' : ''}`}>
          <div className="track-item__lyrics-inner">
            <pre className="track-item__lyrics-text">{track.lyrics}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackItem
