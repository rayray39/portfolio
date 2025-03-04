import { Stack } from "@mui/material"
import Header from "./Header"

function App() {
    return <Stack sx={{ 
        width: '50%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'fixed',
        transform: 'translate(50%, 40%)',
    }}>
        <Header />
    </Stack>
}

export default App