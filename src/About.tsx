import { Box, Stack } from "@mui/material"

function About() {
    return <>
        <Stack>
            <Box sx={{
                fontWeight:'bold',
                fontSize:'24px',
                marginTop:'40px'
            }}>
                About Me
            </Box>

            <Box sx={{
                fontSize:'20px'
            }}>
                I'm passionate about building innovative fullstack applications and robotics development.
                I've a solid background in engineering, computer science and robotics.
                I'm currently working on Peng, a no nonsense dating platform for the serious.
            </Box>
        </Stack>
    </>
}

export default About