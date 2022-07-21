import { useParams } from "react-router-dom"
import { ListView } from "../components/List"
import { Footer } from "../features/Footer"
import { Header } from "../features/Header"
import { WalletTabs } from "../features/WalletTabs"

export function Connect(props: any) {
    const { id } = useParams()
    return (
        <ListView header={<Header />}>
            <WalletTabs />
            <Footer />
        </ListView>
    )
}