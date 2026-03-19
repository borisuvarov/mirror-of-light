import { useState } from 'react'
import { Track } from '../types'
import './TrackItem.css'

interface TrackItemProps {
  track: Track;
}

const MOCK_LYRICS = [
  'Свет проходит сквозь кристалл\nРазбивается на тысячи осколков\nКаждый — отражение\nТого, что было и не будет',
  'Ртутная река течёт во тьме\nСеребро и золото смешались\nВ зеркале без дна\nОтражения танцуют',
  'Огонь алхимии горит\nВ ладонях тех, кто знает путь\nСквозь ночь и пепел\nК новому рассвету',
  'Кристаллы времени растут\nВ пещерах памяти моей\nИх грани острые\nРежут тишину на части',
  'Звёзды падают в колодец\nВода становится огнём\nИ в этом пламени\nРождается алмазный голос',
];

function getMockLyrics(title: string): string {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash + title.charCodeAt(i)) | 0;
  }
  return MOCK_LYRICS[Math.abs(hash) % MOCK_LYRICS.length];
}

function TrackItem({ track }: TrackItemProps) {
  const [expanded, setExpanded] = useState(false);
  const lyrics = track.lyrics || getMockLyrics(track.title);

  return (
    <div className={`track-item ${expanded ? 'track-item--expanded' : ''}`}>
      <button
        className="track-item__row"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span className="track-item__number">{String(track.number).padStart(2, '0')}</span>
        <span className="track-item__title">{track.title}</span>
        <span className="track-item__duration">{track.duration}</span>
        <span className={`track-item__expand ${expanded ? 'track-item__expand--open' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div className={`track-item__lyrics ${expanded ? 'track-item__lyrics--open' : ''}`}>
        <div className="track-item__lyrics-inner">
          <pre className="track-item__lyrics-text">{lyrics}</pre>
        </div>
      </div>
    </div>
  );
}

export default TrackItem
