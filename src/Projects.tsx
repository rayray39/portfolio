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
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    </>
}

export default Projects
