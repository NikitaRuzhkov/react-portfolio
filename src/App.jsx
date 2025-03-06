import { Header, Footer, Home, AboutMe, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contact, ScrollToTop, ThemeToogle } from "./components"


function App() {


    return (
        <>
            <Header />
            <main>
                <Home />
                <AboutMe />
                <SkillsInfo />
                <Services />
                <Portfolio />
                <GetInTouch />
                <Clients />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            <ThemeToogle />
        </>
    )
}

export default App
