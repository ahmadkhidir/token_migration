import styles from './Header.module.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from '../Carousel';
import data from '../../data.json'

export function Header(props: any) {
    useEffect(() => {
        // @ts-ignore
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('callback - particles.js config loaded');
        })
    }, [])

    return (
        <header className={styles.header}>
            <nav className={styles.navs}>
                <Link to="/" className={styles.logo}>
                    <h1>Powered by</h1>
                    <p>TokenMigration</p>
                </Link>
                <section className={styles.carousel}>
                    <Carousel />
                </section>
            </nav>
            <section className={styles.animation} id='particles-js'></section>
        </header>
    )
}