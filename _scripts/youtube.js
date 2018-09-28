import YouTubePlayer from 'youtube-player'
import $ from 'jquery'

export default function (youtubeId) {
    if (youtubeId) {
        // Loading Video
        YouTubePlayer('video', { videoId: youtubeId });

        // Adding link
        let a = $('<a></a>').attr({
            target: "_blank",
            href() {
                return `https://www.youtube.com/watch?v=${youtubeId}`
            }
        }).text('Ver en Youtube')
        $('#youtube').addClass('yt-see').append(a)
    } else {
        // If I don't created video on youtube
        $('#youtube').addClass('yt-disable').text('Pronto habra Video')
    }
}