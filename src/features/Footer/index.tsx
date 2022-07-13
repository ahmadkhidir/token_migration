import styles from './Footer.module.scss'

export function Footer(props: any) {
    return (
        <footer className={styles.footer}>
            <section className={styles.socials}>
                <h1>Fixmigration connects web applications to supported mobile wallets.</h1>
                <div></div>
            </section>
            <p className={styles.copyright}>Copyright © 2022 Fixmigration, Inc. All rights reserved.</p>
        </footer>
    )
}