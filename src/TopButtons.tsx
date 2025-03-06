import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

function TopButtons() {

    const goToHome = () => {

    }

    const goToGithub = () => {
        const github = "https://github.com/rayray39";
        window.open(github, '_blank');
    }

    const goToLinkedin = () => {
        const linkedin = "https://linkedin.com/in/rayray39";
        window.open(linkedin, '_blank');
    }

    return <Box sx={{
        position:'fixed',
        width: '100%',
        top:'2%',
        left:'42%',
        zIndex: 1000,
    }}>
        <ButtonGroup disableElevation variant="contained" aria-label="Basic button group" sx={{
            '& .MuiButtonGroup-grouped': { height:'46px' }
        }} >
            <Button>🏠</Button>
            <Button onClick={goToGithub}>Github</Button>
            <Button onClick={goToLinkedin}>LinkedIn</Button>
        </ButtonGroup>
    </Box>
}

export default TopButtons