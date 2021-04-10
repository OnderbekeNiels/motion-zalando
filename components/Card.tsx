import Lottie from 'react-lottie';

export default function Card(props: any) {

    const defaultOptions = {
        loop: false,
        autoplay: true,
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
                width={200} />
            <h3 className='c-card__title u-max-width--xs'>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </article>
    )
}