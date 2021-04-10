import Image from 'next/image'
import Link from 'next/link'
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function DeliveryServiceIcon(props: any) {
    return (
        <Link href={props.href}>
            <div className='c-delivery-service-icon'>
                <Image src={props.src} alt={props.alt} width='240px' height='100px' />
            </div>
        </Link>
        
    )
}