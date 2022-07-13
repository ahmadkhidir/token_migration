import { useParams } from "react-router-dom"
import { ListView } from "../components/List"
import { Footer } from "../features/Footer"
import { Header } from "../features/Header"

export function Connect(props: any) {
    const { id } = useParams()
    return (
        <ListView header={<Header />}>
            <Footer />
        </ListView>
    )
}