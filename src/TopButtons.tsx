import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

function TopButtons() {
    return <Box sx={{
        position:'fixed',
        width: '100%',
        top:'2%',
        left:'40%',
        zIndex: 1000
    }}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>Home</Button>
            <Button>Github</Button>
            <Button>LinkedIn</Button>
        </ButtonGroup>
    </Box>
}

export default TopButtons