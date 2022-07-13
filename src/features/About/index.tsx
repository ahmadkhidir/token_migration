import { Card } from '../../components/Card'
import styles from './About.module.scss'
import image1 from './assets/right-to-rectification.png'
import image2 from './assets/upgrade.png'
import image3 from './assets/data-recovery.png'
import image4 from './assets/nft.png'
import image5 from './assets/bridge.png'
import image6 from './assets/network.png'
import image7 from './assets/info-center.png'
import image8 from './assets/encrypted.png'
import image9 from './assets/link.png'

export function About(props: any) {
    return (
        <section className={styles.about}>
            <Card
                icon={image1}
                title='RECTIFICATION'
                text='Rectification support warranties completely decentralized'
            />
            <Card
                icon={image2}
                title='UPGRADE'
                text='Migrate tokens to newer network versions. Decentralized autonomous organization(DAO) upgrade and coin migration'
            />
            <Card
                icon={image3}
                title='RECOVERY'
                text='Recover wallet TATs Dapps with Blockchain and DeFi'
            />
            <Card
                icon={image4}
                title='MINT NFT'
                text='Interaction between NFT Blockchain and mobile browsers are supported via mobile deep linking Having complete control of your NFT Minting'
            />
            <Card
                icon={image5}
                title='BRIDGE'
                text='Enables applications built on different blockchains to communicate and interact with each other. Therefore unlocking a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon - four of the leading blockchains and protocols - are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol.'
            />
            <Card
                icon={image6}
                title='Protocol'
                text='TokenMigration provides an essential utility support for blockchain newcomers, token traders, crypto gamers, and developers with issues.
                TokenMigration is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).'
            />
            <Card
                icon={image7}
                title='How it works'
                text='Communication happens over a bridge server that relays messages without access to their content. The contents are encrypted using the session data shared by the QR code or deep link between the TokenMigration and the wallet. Read more about it on our social network.'
            />
            <Card
                icon={image8}
                title='Secure Encryption'
                text="Each coin is basically a computer file which is stored in a 'digital wallet' app on a smartphone or computer. People can send coins (or part of one) to your digital wallet, and you can send coins to other people."
            />
            <Card
                icon={image9}
                title='Deep Links'
                text='TokenMigration provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.
                The connection is initiated by one peer displaying a deep link with a standard TokenMigration URI and is established when the counter-party approves this connection request.'
            />
        </section>
    )
}