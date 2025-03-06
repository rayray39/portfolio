import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

// about me section
function About() {
    const SMALL_SECTION_FONTSIZE = '30px';
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    return <>
        <Stack>
            <Box sx={{
                fontWeight:'bold',
                fontSize: SMALL_SECTION_FONTSIZE,
                marginTop:'40px'
            }}>
                About Me
            </Box>

            <Box sx={{
                fontSize: SMALL_SECTION_CONTENT_FONTSIZE
            }}>
                I'm passionate about building innovative fullstack applications and robotics development.
                I've a solid background in engineering, computer science and robotics.
                I'm currently working on <a href="https://github.com/rayray39/peng">Peng, a no nonsense dating platform for the serious</a>.
            </Box>
        </Stack>
    </>
}

export default About