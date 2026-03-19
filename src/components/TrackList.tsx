import { Track } from '../types'
import TrackItem from './TrackItem'
import './TrackList.css'

interface TrackListProps {
  tracks: Track[];
}

function TrackList({ tracks }: TrackListProps) {
  return (
    <div className="track-list">
      {tracks.map(track => (
        <TrackItem key={track.number} track={track} />
      ))}
    </div>
  );
}

export default TrackList
