import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie';

export default function Card(props: any) {

    const [isStarted, setIsStarted] = useState<boolean>(true);

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: props.animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Fade onReveal={() => setIsStarted(false)} wait={1300} bottom duration={800}><article className='c-card' >
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                isPaused={isStarted} />
            <h3 className='c-card__title u-max-width--xs'>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </article></Fade>
    )
}