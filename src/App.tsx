import Stack from "@mui/material/Stack"
import Header from "./Header"
import About from "./About"
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
        margin: 'auto'
    }}>
        <TopButtons />
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </Stack>
}

export default App