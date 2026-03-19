import './StreamingLinks.css'

interface StreamingLinksProps {
  appleMusicUrl?: string;
  spotifyUrl?: string;
  youtubeMusicUrl?: string;
  variant?: 'hero' | 'card';
}

function StreamingLinks({ appleMusicUrl, spotifyUrl, youtubeMusicUrl, variant = 'card' }: StreamingLinksProps) {
  const links = [
    { url: spotifyUrl, label: 'Spotify', icon: spotifyIcon, className: '' },
    { url: appleMusicUrl, label: 'Apple Music', icon: appleMusicIcon, className: 'streaming-links__icon--apple' },
    { url: youtubeMusicUrl, label: 'YouTube Music', icon: youtubeMusicIcon, className: '' },
  ].filter(l => l.url);

  if (links.length === 0) return null;

  return (
    <div className={`streaming-links streaming-links--${variant}`}>
      {links.map(({ url, label, icon, className }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="streaming-links__link"
          title={label}
        >
          <span className={`streaming-links__icon ${className}`} dangerouslySetInnerHTML={{ __html: icon }} />
          {variant === 'hero' && <span className="streaming-links__label">{label}</span>}
        </a>
      ))}
    </div>
  );
}

const spotifyIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;

const appleMusicIcon = `<svg viewBox="0 0 814 1000" fill="currentColor"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.5-81.8-105.9-209.6-105.9-330.8 0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 103.5-30.4 135.5-71.3z"/></svg>`;

const youtubeMusicIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228 18.228 15.432 18.228 12 15.432 5.772 12 5.772zM9.684 15.54V8.46L16.02 12l-6.336 3.54z"/></svg>`;

export default StreamingLinks
