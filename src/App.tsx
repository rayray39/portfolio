import { Stack } from "@mui/material"
import Header from "./Header"
import About from "./About"
import Techstack from "./Techstack"
import Projects from "./Projects"
import Experience from "./Experience"

function App() {
    return <Stack sx={{ 
        width: '50%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'start',
        justifyContent:'center',
        transform: 'translate(50%, 0)',
    }}>
        <Header />
        <About />
        <Projects />
        <Experience />
        <Techstack />
    </Stack>
}

export default App