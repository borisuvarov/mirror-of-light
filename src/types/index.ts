export interface Track {
  number: number;
  title: string;
  duration: string;
  lyrics?: string;
}

export interface Release {
  id: string;
  title: string;
  releaseDate: string;
  year: number;
  type: 'album' | 'ep' | 'live';
  trackCount: number;
  tracks: Track[];
  coverImage?: string;
  coverGradient?: string;
  appleMusicUrl?: string;
  spotifyUrl?: string;
  youtubeMusicUrl?: string;
}

export type FilterType = 'all' | 'album' | 'ep' | 'live';
