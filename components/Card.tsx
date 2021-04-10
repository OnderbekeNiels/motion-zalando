import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie';

export default function Card(props: any) {

    const [pause, setPause] = useState<boolean>(true);

    const showAnimation = () =>{
        setTimeout(() =>{
            
        },2000)
        setPause(false);
    }

    const defaultOptions = {
        loop: false,
        autoPlay: false,
        animationData: props.animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Fade onReveal={() => showAnimation} bottom duration={800}><article className='c-card' >
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                isStopped={pause} />
            <h3 className='c-card__title u-max-width--xs'>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </article></Fade>

    )
}