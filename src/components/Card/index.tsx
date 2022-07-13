import styles from './Card.module.scss'

interface CardProps {
    icon: string,
    title: string,
    text: string,
}

export function Card(props: CardProps) {
    return (
        <article className={styles.card}>
            <img src={props.icon} alt='icon' draggable={false} />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </article>
    )
}