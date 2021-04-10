import Fade from 'react-reveal/Fade';
import Button from '../components/Button';

export default function Article(props: any) {
    return (

        <article className={`c-article ${props.reverse && 'u-flex-container--row-reverse'}`}>
            <div className={`c-article__info  ${props.reverse && 'c-article__info--right'}`}>
                <h3 className='c-article__title u-mb--xs'>{props.title}</h3>
                <p className='c-article__description'>{props.description}</p>
                {props.hasButton && <Button text={props.buttonTitle} isArrowButton={true} href={props.href}></Button>}

            </div>
            <Fade bottom>
                <img
                    className='c-article__image'
                    src={props.imgSrc}
                    alt={props.imgAlt}
                />
            </Fade>
        </article>

    )
}