export default function Section(props: any){
    return(
        <section className={`o-section ${props.className}`}>
            {props.children}
        </section>
    )
}