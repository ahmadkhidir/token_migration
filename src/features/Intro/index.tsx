import { Link } from 'react-router-dom'
import styles from './Intro.module.scss'

export function Intro(props: any) {
    return (
        <section className={styles.intro}>
            <article>
                <h1>CRYPTO BRIDGE SERVER TO BLOCKCHAIN APPS</h1>
                <p>TokenMigration is the web3 standard to connect blockchain wallets to dapps.</p>
                <Link to='/wallet/' className={styles.button}>Verify Wallet</Link>
            </article>
        </section>
    )
}