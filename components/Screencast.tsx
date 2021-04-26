export default function Screencast() {
    return (
        <video className='c-screencast' autoPlay muted controls poster="/img/png/thumbnail.png">
                <source src="/video/ScreencastFeatures.mp4" type="video/mp4"/>
            </video>
    )
}