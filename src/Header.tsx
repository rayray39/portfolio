import { Avatar, Box, Stack } from "@mui/material"

// main header section - includes titles and avatar
function Header() {
    return <>
        <Stack direction={"row"} >
            <Stack>
                <Box sx={{
                    fontSize:'50px',
                    fontWeight:'bold'
                }}>
                    Hi, I'm Rayner 👋🏼
                </Box>
                <Box sx={{
                    fontSize:'30px',
                    width:'80%'
                }}>
                    Engineer focusing on software development and product. Happy reading! 😇
                </Box>
            </Stack>

            <Box>
                <Avatar sx={{ width:186, height:186}} alt="Rayner Lim" src="./src/assets/rayray39_2.jpg" />
            </Box>
        </Stack>
    </>
}

export default Header