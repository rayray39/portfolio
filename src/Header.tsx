import { Avatar, Box, Stack } from "@mui/material"

// main header section - includes titles and avatar
function Header() {
    const MAIN_HEADER_FONTSIZE = '50px';
    const SUB_HEADER_FONTSIZE = '30px';
    const AVATAR_DIAMETER = 178;

    return <>
        <Stack direction={"row"} >
            <Stack>
                <Box sx={{
                    fontSize: MAIN_HEADER_FONTSIZE,
                    fontWeight:'bold'
                }}>
                    Hi, I'm Rayner 👋🏼
                </Box>
                <Box sx={{
                    fontSize: SUB_HEADER_FONTSIZE,
                    width:'80%'
                }}>
                    Engineer focusing on software development and product. Happy reading! 😇
                </Box>
            </Stack>

            <Box>
                <Avatar sx={{ width:AVATAR_DIAMETER, height:AVATAR_DIAMETER}} alt="Rayner Lim" src="./src/assets/rayray39_2.jpg" />
            </Box>
        </Stack>
    </>
}

export default Header