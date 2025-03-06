import { Stack } from "@mui/material"
import Header from "./Header"
import About from "./About"
// import Techstack from "./Techstack"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
import TopButtons from "./TopButtons"

function App() {
    return <Stack sx={{ 
        width: '50%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'start',
        justifyContent:'center',
        // transform: 'translate(50%, 0)',
        margin: 'auto'
    }}>
        <TopButtons />
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
        {/* <Techstack /> */}
    </Stack>
}

export default App