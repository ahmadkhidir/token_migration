import { ListView } from "../components/List";
import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import { WalletProducts } from "../features/WalletProducts";

export function Wallet(props: any) {
    return (
        <ListView header={<Header />}>
            <WalletProducts />
            <Footer />
        </ListView>
    )
}