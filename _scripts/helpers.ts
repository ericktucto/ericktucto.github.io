import YouTubePlayer from 'youtube-player'

export function youtube(youtubeId: string | null | undefined) {
  if (youtubeId) {
    YouTubePlayer('video', { videoId: youtubeId });
  }
}
