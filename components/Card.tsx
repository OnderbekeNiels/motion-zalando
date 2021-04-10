import { useState } from 'react';
import Lottie from 'react-lottie';

export default function Card(props: any) {

    const [pause, setPause] = useState<boolean>(false);

    setTimeout(function () { setPause(!pause); }, 3000);

    const defaultOptions = {
        loop:false,
        animationData: props.animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <article className='c-card'>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                isStopped={pause} />
            <h3 className='c-card__title u-max-width--xs'>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </article>
    )
}