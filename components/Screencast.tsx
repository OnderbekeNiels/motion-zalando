export default function Screencast() {
    return (
        <video className='c-screencast' controls preload="auto" poster="/img/png/thumbnail.png">
                <source src="/video/Screencast.mp4" type="video/mp4"/>
            </video>
    )
}