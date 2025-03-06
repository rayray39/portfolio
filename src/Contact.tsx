import { Box, Chip, Stack } from "@mui/material"

function Contact() {
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    return <>
        <Stack sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginBottom:'80px',
            marginTop:'80px'
        }}>
            <Chip label="Contact" sx={{width:'12%', bgcolor:'black', color:'white'}}/>
            <Box sx={{
                textAlign:'center',
                fontWeight:'bold',
                fontSize:'40px',
                marginTop:'5px'
            }}>
                Get In Touch ✌🏼
            </Box>
            <Box sx={{
                fontSize:SMALL_SECTION_CONTENT_FONTSIZE,
                textAlign:'center',
                marginTop: '10px',
                width:'70%'
            }}>
                Let's connect! Feel free to reach out via <a href="https://www.linkedin.com/in/rayray39/">LinkedIn</a> and I'll get back to you as soon as I can.
            </Box>
        </Stack>
    </>
}

export default Contact