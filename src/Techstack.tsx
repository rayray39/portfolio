import { Box, Stack } from "@mui/material"

function Techstack() {
    const SMALL_SECTION_FONTSIZE = '30px';
    const TECHSTACK_ICON_WIDTH = '16%';

    return <>
        <Stack>
            <Box sx={{
                fontWeight:'bold',
                fontSize: SMALL_SECTION_FONTSIZE,
                marginTop:'40px',
                marginBottom:'20px'
            }}>
                Tech Stack
            </Box>
            <Stack direction={'row'} spacing={4} sx={{ display:'flex', justifyContent:'space-evenly', marginBottom:'14px' }}>
                <img src="./src/assets/Java.svg" alt="java" width={TECHSTACK_ICON_WIDTH}/>
                <img src="./src/assets/Python.svg" alt="python" width={TECHSTACK_ICON_WIDTH}/>
                <img src="./src/assets/JavaScript.svg" alt="javascript" width={TECHSTACK_ICON_WIDTH}/>
            </Stack>
            <Stack direction={'row'} spacing={4} sx={{ display:'flex', justifyContent:'space-evenly' }}>
                <img src="./src/assets/React.svg" alt="react" width={TECHSTACK_ICON_WIDTH}/>
                <img src="./src/assets/Express.svg" alt="express" width={TECHSTACK_ICON_WIDTH}/>
                <img src="./src/assets/SQLite.svg" alt="sqlite" width={TECHSTACK_ICON_WIDTH}/>
            </Stack>
        </Stack>
    </>
}

export default Techstack