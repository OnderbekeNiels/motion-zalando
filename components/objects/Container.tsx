export default function Container(props: any) {
    return (
        <div className={`o-container ${props.className}`}>
            {props.children}
        </div>
    )
}