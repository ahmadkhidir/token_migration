import { ListView } from "../components/List";
import { About } from "../features/About";
import { ContentRow, FullCarousel } from "../features/Carousel";
import { Faq } from "../features/Faq";
import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import { Intro } from "../features/Intro";

export function Home(props:any) {
    return (
        <ListView header={<Header />}>
            <Intro />
            <ContentRow />
            <FullCarousel />
            <About />
            <Faq />
            <Footer />
        </ListView>
    )
}