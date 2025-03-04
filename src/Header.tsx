import { Avatar, Box, Stack } from "@mui/material"

function Header() {
    return <>
        <Stack direction={"row"} >
            <Stack>
                <Box sx={{
                    fontSize:'50px'
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
                <Avatar sx={{ width:190, height:190}} alt="Rayner Lim" src="./src/assets/rayray39_2.jpg" />
            </Box>
        </Stack>
    </>
}

export default Header