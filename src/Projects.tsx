import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"

// featured personal projects section
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
    const pengGithub = 'https:github.com/rayray39/peng';

    const novellyChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="PicoCSS" />,
        <CustomChip label="Google Books API" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="React Bootstrap" />,
    ]
    const novellyGithub = 'https:github.com/rayray39/novelly';

    const bredChipLabels = [
        <CustomChip label="ReactJS" />,
        <CustomChip label="Express.JS" />,
        <CustomChip label="React Bootstrap" />,
        <CustomChip label="Chart.JS" />,
        <CustomChip label="RESTful APIs" />,
        <CustomChip label="Material UI" />,
    ]
    const bredGithub = 'https:github.com/rayray39/bred';

    return <>
        <Stack sx={{
            marginTop:'80px'
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
                    Featured Projects 👨‍💻
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
                    imagePath="/src/assets/projects/peng_logo.jpg" 
                    title="Peng" 
                    description="Peng is a no nonsense dating platform designed for those looking to make a serious connection.
                    Features include authentication via JWT (Json Web Tokens), real-time messaging, interactive
                    and dynamic swiping features."
                    customChipLabels={pengChipLabels}
                    githubRepoLink={pengGithub}
                />
                <CustomCard 
                    imagePath="/src/assets/projects/novelly_logo.jpg" 
                    title="Novelly" 
                    description="NOVELLY is your ultimate library management system, designed to streamline tracking library 
                    resources with features like book browsing, borrowing and returning, and adding personalized notes to 
                    your wishlist favorites. It interacts with the Google Books API for book data."
                    customChipLabels={novellyChipLabels}
                    githubRepoLink={novellyGithub}
                />
                <CustomCard 
                    imagePath="/src/assets/projects/bred_logo.jpg" 
                    title="Bred" 
                    description="Bred is the ultimate financial management platform for your organization, designed to 
                    streamline expense tracking across projects, visualize spending patterns with dynamic charts, and 
                    provide actionable insights to make data-driven decisions effortlessly."
                    customChipLabels={bredChipLabels}
                    githubRepoLink={bredGithub}
                />
            </Stack>
        </Stack>
    </>
}

export default Projects

// renders a card to display a project
function CustomCard({ imagePath, title, description, customChipLabels, githubRepoLink }:
        { imagePath:string, title:string, description:string, customChipLabels:React.ReactNode[], githubRepoLink:string }) {
    
    // imagePath: path to locally stored image
    // title: title of project
    // description: description of project
    // customChipLabels: a list of Chip components to display tech used
    // githubRepoLink: link to github repo
    
    const visitGithubRepo = () => {
        window.open(githubRepoLink, '_blank')
    }
    
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
        <CardActions>
            <Button onClick={visitGithubRepo} size="small" variant="contained" disableElevation sx={{bgcolor:'black', borderRadius:'12px'}}>
                view github repo
            </Button>
        </CardActions>
    </Card>
}

// displays a chip component with cusom styling
function CustomChip({ label }: { label:string }) {
    // label: label to be displayed on the chip 
    return <Chip label={label} sx={{bgcolor:'black', color:'white'}} />
}