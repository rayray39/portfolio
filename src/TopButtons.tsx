import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

// top button groups for navigation
function TopButtons() {

    const goToHome = () => {
        window.scrollTo({ top:0, behavior:'smooth'})
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
        top:'2%',
        left:'50%',
        transform:'translateX(-50%)',
        zIndex: 1000,
    }}>
        <ButtonGroup id='top-button-group' disableElevation variant="contained" aria-label="Basic button group" sx={{
            '& .MuiButtonGroup-grouped': { height:'46px' }
        }} >
            <Button onClick={goToHome}>🏠</Button>
            <Button onClick={goToGithub}>Github</Button>
            <Button onClick={goToLinkedin}>LinkedIn</Button>
        </ButtonGroup>
    </Box>
}

export default TopButtons