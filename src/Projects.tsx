import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"

function Projects() {
    // const SMALL_SECTION_FONTSIZE = '30px';
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    const pengChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="SQLite3" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="Material UI" />,
        <CustomChip label="Vercel" />
    ]

    const novellyChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="PicoCSS" />,
        <CustomChip label="Google Books API" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="React Bootstrap" />,
    ]

    const bredChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="React Bootstrap" />,
        <CustomChip label="Chart.JS" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="Material UI" />,
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
            
            <Stack spacing={4}>
                <CustomCard 
                    imagePath="/src/assets/peng_logo.jpg" 
                    title="Peng" 
                    description="Peng is a no nonsense dating platform designed for those looking to make a serious connection.
                    Features include authentication via JWT (Json Web Tokens), real-time messaging, interactive
                    and dynamic swiping features."
                    customChipLabels={pengChipLabels}
                />
                <CustomCard 
                    imagePath="/src/assets/novelly_logo.jpg" 
                    title="Novelly" 
                    description="NOVELLY is your ultimate library management system, designed to streamline tracking library 
                    resources with features like book browsing, borrowing and returning, and adding personalized notes to 
                    your wishlist favorites. It interacts with the Google Books API for book data."
                    customChipLabels={novellyChipLabels}
                />
                <CustomCard 
                    imagePath="/src/assets/bred_logo.jpg" 
                    title="Bred" 
                    description="Bred is the ultimate financial management platform for your organization, designed to 
                    streamline expense tracking across projects, visualize spending patterns with dynamic charts, and 
                    provide actionable insights to make data-driven decisions effortlessly."
                    customChipLabels={bredChipLabels}
                />
            </Stack>
        </Stack>
    </>
}

export default Projects

function CustomCard({ imagePath, title, description, customChipLabels }:
        { imagePath:string, title:string, description:string, customChipLabels:React.ReactNode[] }) {
    return <Card variant="outlined" sx={{ width:'100%' }}>
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