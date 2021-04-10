import Image from 'next/image'
import Link from 'next/link'

export default function DeliveryServiceIcon(props: any) {
    return (
        <Link href={props.href}>
            <div className='c-delivery-service-icon'>
                {props.svg}
            </div>
        </Link>
        
    )
}