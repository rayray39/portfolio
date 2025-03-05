import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"

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
                alignItems:'center',
                marginBottom:'40px'
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
                <Box sx={{
                    fontSize:SMALL_SECTION_CONTENT_FONTSIZE,
                    textAlign:'center',
                    marginTop: '10px',
                    width:'70%'
                }}>
                    I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favourite projects below.
                </Box>
            </Stack>
            
            <Card sx={{ width:'100%' }}>
                <CardMedia
                    sx={{ height: 220 }}
                    image="/src/assets/peng_logo.jpg"
                    title="Peng"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Peng
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Peng is a no nonsense dating platform designed for those looking to make a serious connection.
                        Features include authentication via JWT (Json Web Tokens), real-time messaging, interactive
                        and dynamic swiping features.
                    </Typography>
                    <Stack direction={'row'} spacing={2} sx={{ marginTop:'10px'}}>
                        <Chip label='ReactJS'/>
                        <Chip label='Express.JS'/>
                        <Chip label='SQLite3'/>
                        <Chip label='RESTful APIs'/>
                        <Chip label='Material UI'/>
                        <Chip label='Vercel'/>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    </>
}

export default Projects
