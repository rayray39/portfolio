import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"

function Projects() {
    const SMALL_SECTION_FONTSIZE = '30px';
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    const pengChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="SQLite3" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="Material UI" />,
        <CustomChip label="Vercel" />
    ]

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
            
            <CustomCard 
                imagePath="peng_logo.jpg" 
                title="Peng" 
                description="Peng is a no nonsense dating platform designed for those looking to make a serious connection.
                Features include authentication via JWT (Json Web Tokens), real-time messaging, interactive
                and dynamic swiping features."
                customChipLabels={pengChipLabels}
            />
        </Stack>
    </>
}

export default Projects

function CustomCard({ imagePath, title, description, customChipLabels }:
        { imagePath:string, title:string, description:string, customChipLabels:React.ReactNode[] }) {
    return <Card sx={{ width:'100%' }}>
        <CardMedia
            sx={{ height: 220 }}
            image={imagePath}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
            </Typography>
            <Stack direction={'row'} spacing={2} sx={{ marginTop:'10px' }}>
                {customChipLabels}
            </Stack>
        </CardContent>
    </Card>
}

function CustomChip({ label }: { label:string }) {
    return <Chip label={label} sx={{bgcolor:'black', color:'white'}} />
}