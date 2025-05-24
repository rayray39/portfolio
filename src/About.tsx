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
                I'm a developer with a background in robotics and computer science. 
                I love building full-stack web apps and exploring computer vision. 
                For my final year thesis, I developed a computer vision pipeline for octopus arm segmentation and kinematics extraction — 
                a project that deepened my interest in visual systems and problem-solving through tech.
            </Box>
        </Stack>
    </>
}

export default About