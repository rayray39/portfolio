import { Stack } from "@mui/material"
import Header from "./Header"
import About from "./About"

function App() {
    return <Stack sx={{ 
        width: '50%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'fixed',
        transform: 'translate(50%, 0)',
    }}>
        <Header />
        <About />
    </Stack>
}

export default App