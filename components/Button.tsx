import Link from 'next/link'

export default function Button (props: any){
    if(props.isArrowButton){
        return (
            <Link href={`${props.href}`}>
                <a className={`c-button--arrow ${props.className}`}>
                    {props.text}
                    <svg className='c-button__arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
                </a>
            </Link>
        )
    }
        return (
            <Link href={`${props.href}`}>
                <a className={`c-button ${props.className}`}>
                    {props.text}
                </a>                
            </Link>
        )
    
}