export default function Screencast() {
    return (
        <video className='c-screencast' autoPlay loop muted controls poster="/img/png/thumbnail.png">
            <source src="/video/screencast-features.video.mp4" type="video/mp4" />
        </video>
    )
}