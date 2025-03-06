import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

// experience and education section
function Experience() {
    const SMALL_SECTION_FONTSIZE = '30px';
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';

    return (
        <Stack sx={{
            marginTop:'40px'
        }}>
            <Stack sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                marginBottom:'40px'
            }}>
                <Chip label="Experience & Education" sx={{width:'24%', bgcolor:'black', color:'white'}}/>
                <Box sx={{
                    textAlign:'center',
                    fontWeight:'bold',
                    fontSize:'40px',
                    marginTop:'5px'
                }}>
                    Experience & Education
                </Box>
                <Box sx={{
                    fontSize:SMALL_SECTION_CONTENT_FONTSIZE,
                    textAlign:'center',
                    marginTop: '10px',
                    width:'70%'
                }}>
                    Here's a summary of my professional journey and educational background in engineering.
                </Box>
            </Stack>
            
            <Box>
                <Box sx={{
                    fontSize:SMALL_SECTION_FONTSIZE,
                    fontWeight:'bold'
                }}>
                    Experience
                </Box>
                <Timeline sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.4,
                    },
                }}>
                    <CustomTimeLineItem 
                        itemIcon="🤖" 
                        itemHeader="Robotics Engineer, NDR Medical Technology"
                        itemContent="some content"
                        itemFromDate="Dec 2023"
                        itemToDate="May 2024"
                    />
                    <CustomTimeLineItem 
                        itemIcon="🚁" 
                        itemHeader="Design Engineer, Avetics Global"
                        itemContent="some content"
                        itemFromDate="May 2023"
                        itemToDate="Aug 2023"
                    />
                </Timeline>
            </Box>

            <Box>
                <Box sx={{
                    fontSize:SMALL_SECTION_FONTSIZE,
                    fontWeight:'bold',
                    marginBottom:'10px',
                    marginTop:'40px'
                }}>
                    Education
                </Box>
                <Stack>
                    <EducationCard
                        title="National University of Singapore"
                        description="Bachelor of Engineering (Robotics Specialisation), Minor in Computer Science"
                        imagePath="/src/assets/education/nus_logo.png"
                        date="2021-2025"
                    />
                </Stack>
            </Box>

            <Box>
                <Box sx={{
                    fontSize:SMALL_SECTION_FONTSIZE,
                    fontWeight:'bold',
                    marginBottom:'10px',
                    marginTop:'40px'
                }}>
                    Certifications
                </Box>
                <Stack spacing={2}>
                    <EducationCard
                        title="React Basics"
                        description="Meta"
                        imagePath="/src/assets/education/meta_logo.jpg"
                        date="2024"
                    />
                    <EducationCard
                        title="Backend Development with .NET"
                        description="Microsoft"
                        imagePath="/src/assets/education/microsoft_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="Introduction to Programming with C#"
                        description="Microsoft"
                        imagePath="/src/assets/education/microsoft_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="CS50's Web Programming with Python and JavaScript"
                        description="CS50, Harvard"
                        imagePath="/src/assets/education/harvard_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="The Complete Java Certification Course"
                        description="Udemy"
                        imagePath="/src/assets/education/udemy_logo.png"
                        date="2023"
                    />
                </Stack>
            </Box>
        </Stack>
    );
}

export default Experience

// timeline item for professional experience with custom styling
function CustomTimeLineItem({ itemIcon, itemHeader, itemContent, itemFromDate, itemToDate }:
    { itemIcon:string, itemHeader:string, itemContent:string, itemFromDate:string, itemToDate:string}) {

    return <>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                >
                {itemFromDate}-{itemToDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ bgcolor:'white' }}>
                    {itemIcon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {itemHeader}
                </Typography>
                <Typography>{itemContent}</Typography>
            </TimelineContent>
        </TimelineItem>
    </>
}

function EducationCard({ title, description, imagePath, date }:{ title:string, description:string, imagePath:string, date:string}) {
    return <>
        <Box>
            <Stack direction={'row'} sx={{
                display:'flex',
                justifyContent:'stretch'
            }}>
                <Stack direction={'row'} spacing={2}>
                    <Avatar alt="NUS" src={imagePath} />
                    <Stack>
                        <Box sx={{
                            fontSize: "20px",
                            fontWeight:'bold'
                        }}>
                            {title}
                        </Box>
                        {description}
                    </Stack>
                </Stack>
                {date}
            </Stack>
        </Box>
    </>
}