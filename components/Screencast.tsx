export default function Screencast() {
    return (
        <video className='c-screencast' autoPlay loop muted controls poster="/img/png/thumbnail.png">
            <source src="/video/screencastFeatures_Final.mp4" type="video/mp4" />
        </video>
    )
}