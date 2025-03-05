import { Box, Chip, Stack } from "@mui/material"

function Projects() {
    const SMALL_SECTION_FONTSIZE = '30px';
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    return <>
        <Stack sx={{
            marginTop:'40px'
        }}>
            <Stack sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Chip label="My Projects" sx={{width:'16%', bgcolor:'black', color:'white'}}/>
                <Box sx={{
                    textAlign:'center',
                    fontWeight:'bold',
                    fontSize:'40px',
                    marginTop:'5px'
                }}>
                    Featured Projects
                </Box>
            </Stack>
            
            
        </Stack>
    </>
}

export default Projects

function Card() {

}