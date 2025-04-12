import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SectionStarter from "./SectionStarter";

// featured personal projects section
function Projects() {
    // const pengChipLabels = [
    //     <CustomChip label="ReactJS" />,
    //     <CustomChip label="Express.JS" />,
    //     <CustomChip label="SQLite3" />,
    //     <CustomChip label="RESTful APIs" />,
    //     <CustomChip label="Material UI" />,
    //     <CustomChip label="Vercel" />
    // ]
    const pengGithub = 'https://github.com/rayray39/peng';

    // const novellyChipLabels = [
    //     <CustomChip label="ReactJS" />,
    //     <CustomChip label="Express.JS" />,
    //     <CustomChip label="PicoCSS" />,
    //     <CustomChip label="Google Books API" />,
    //     <CustomChip label="RESTful APIs" />,
    //     <CustomChip label="React Bootstrap" />,
    // ]
    const novellyGithub = 'https://github.com/rayray39/novelly';

    // const bredChipLabels = [
    //     <CustomChip label="ReactJS" />,
    //     <CustomChip label="Express.JS" />,
    //     <CustomChip label="React Bootstrap" />,
    //     <CustomChip label="Chart.JS" />,
    //     <CustomChip label="RESTful APIs" />,
    //     <CustomChip label="Material UI" />,
    // ]
    const bredGithub = 'https://github.com/rayray39/bred';

    const feelemoGithub = 'https://github.com/rayray39/feelemo';

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
                <SectionStarter 
                    buttonContent="My Projects" 
                    sectionHeader="Featured Projects 👨‍💻"
                    sectionContent="I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favourite projects below."
                />
            </Stack>
            
            <Stack spacing={4}>
                <CustomCard 
                    imagePath="/images/peng_logo.jpg" 
                    title="Peng" 
                    description="Peng is a no nonsense dating platform designed for those looking to make a serious connection.
                    Features include authentication via JWT (Json Web Tokens), real-time messaging, interactive
                    and dynamic swiping features."
                    techStack="ReactJS, Express.JS, SQLite3, Material UI, RESTful APIs, Vercel"
                    githubRepoLink={pengGithub}
                />
                <CustomCard 
                    imagePath="/images/feelemo.jpg" 
                    title="Feelemo" 
                    description="Feelemo is a simple, open space where anyone can freely express their thoughts and emotions 
                    without needing to create an account. This lightweight journal platform is built for users who just 
                    want to write and connect."
                    techStack="ReactJS, Express.JS, SQLite3, Material UI, RESTful APIs"
                    githubRepoLink={feelemoGithub}
                />
                <CustomCard 
                    imagePath="/images/novelly_logo.jpg" 
                    title="Novelly" 
                    description="NOVELLY is your ultimate library management system, designed to streamline tracking library 
                    resources with features like book browsing, borrowing and returning, and adding personalized notes to 
                    your wishlist favorites. It interacts with the Google Books API for book data."
                    techStack="ReactJS, Express.JS, PicoCSS, Google Books API, RESTful APIs, React Bootstrap"
                    githubRepoLink={novellyGithub}
                />
                <CustomCard 
                    imagePath="/images/bred_logo.jpg" 
                    title="Bred" 
                    description="Bred is the ultimate financial management platform for your organization, designed to 
                    streamline expense tracking across projects, visualize spending patterns with dynamic charts, and 
                    provide actionable insights to make data-driven decisions effortlessly."
                    techStack="ReactJS, Express.JS, Chart.JS, RESTful APIs, React Bootstrap, Material UI"
                    githubRepoLink={bredGithub}
                />
            </Stack>
        </Stack>
    </>
}

export default Projects

// renders a card to display a project
function CustomCard({ imagePath, title, description, techStack, githubRepoLink }:
        { imagePath:string, title:string, description:string, techStack:string, githubRepoLink:string }) {
    
    // imagePath: path to locally stored image
    // title: title of project
    // description: description of project
    // customChipLabels: a list of Chip components to display tech used / React.ReactNode[]
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
            {/* <Stack direction={'row'} spacing={2} sx={{ marginTop:'10px' }}>
                {customChipLabels}
            </Stack> */}
            <Typography variant="body2" sx={{ color: 'text.secondary', marginTop:'20px' }}>
                {techStack}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={visitGithubRepo} size="small" variant="contained" disableElevation sx={{bgcolor:'black', borderRadius:'12px'}}>
                view github repo
            </Button>
        </CardActions>
    </Card>
}

// displays a chip component with custom styling
// function CustomChip({ label }: { label:string }) {
//     // label: label to be displayed on the chip 
//     return <Chip label={label} sx={{bgcolor:'black', color:'white'}} />
// }