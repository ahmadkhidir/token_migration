import { useState } from 'react'
import styles from './Faq.module.scss'

export function Faq(props: any) {
    return (
        <section className={styles.faq}>
            <h1>Frequently Asked Questions</h1>
            <section className={styles.content}>
                <FaqTab
                    title='How web frontend and mobile wallets communicate?'
                    text='Communication happens over a bridge server that relays messages without access to their content. The contents are encrypted using the session data shared by the deep link between the dapp and the wallet Fixmigration runs a public bridge server, but you can also roll your own.'
                />
                <FaqTab
                    title='Is there a token?'
                    text='There is no token. Fixmigration protocol does not run on a blockchain and there are no fees.'
                />
                <FaqTab
                    title='How can I help Fixmigration project?'
                    text='Fixmigration is developed by open source developers of various Wallet and Dapp projects. Please contact us on Discord or Telegram if you want to help the project.'
                />
            </section>
        </section>
    )
}


function FaqTab(props: { title: string, text: string }) {
    const [show, setShow] = useState(false)
    return (
        <article
            className={styles.faq_tab}
            onClick={() => setShow(prev => !prev)}>
            <h2>{props.title}</h2>
            {show && <p>{props.text}</p>}
        </article>
    )
}