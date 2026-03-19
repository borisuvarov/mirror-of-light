import { useState } from 'react'
import { discography } from '../data/discography'
import { FilterType } from '../types'
import ReleaseCard from './ReleaseCard'
import './Discography.css'

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'Все' },
  { key: 'album', label: 'Альбомы' },
  { key: 'ep', label: 'EP' },
  { key: 'live', label: 'Концертные' },
];

function Discography() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all'
    ? discography
    : discography.filter(r => r.type === filter);

  return (
    <section className="discography" id="discography">
      <div className="discography__container">
        <div className="discography__filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`discography__filter ${filter === f.key ? 'discography__filter--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="discography__grid">
          <div className="discography__column">
            {filtered.filter((_, i) => i % 2 === 0).map((release, i) => (
              <ReleaseCard key={release.id} release={release} index={i * 2} />
            ))}
          </div>
          <div className="discography__column">
            {filtered.filter((_, i) => i % 2 === 1).map((release, i) => (
              <ReleaseCard key={release.id} release={release} index={i * 2 + 1} />
            ))}
          </div>
        </div>

        <div className="discography__grid-mobile">
          {filtered.map((release, i) => (
            <ReleaseCard key={release.id} release={release} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="discography__empty">Нет релизов в этой категории</p>
        )}
      </div>
    </section>
  )
}

export default Discography
