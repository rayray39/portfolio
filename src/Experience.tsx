import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SectionStarter from "./SectionStarter";

// experience and education section
function Experience() {
    const SMALL_SECTION_FONTSIZE = '30px';

    return (
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
                    buttonContent="Experience & Education" 
                    sectionHeader="Experience & Education 📜" 
                    sectionContent="Here's a summary of my professional journey and educational background in engineering."
                />
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
                        itemContent="GUI programming using PyQt5, testing of robotic arm and delta robot, designed bespoke
                        medical cart and fan shroud."
                        itemFromDate="Dec 2023"
                        itemToDate="May 2024"
                    />
                    <CustomTimeLineItem 
                        itemIcon="🚁" 
                        itemHeader="Design Engineer, Avetics Global"
                        itemContent="Led the design of a custom project, including development, prototyping, and testing."
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
                        imagePath="/images/nus_logo.png"
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
                        imagePath="/images/meta_logo.jpg"
                        date="2024"
                    />
                    <EducationCard
                        title="Backend Development with .NET"
                        description="Microsoft"
                        imagePath="/images/microsoft_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="Introduction to Programming with C#"
                        description="Microsoft"
                        imagePath="/images/microsoft_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="CS50's Web Programming with Python and JavaScript"
                        description="CS50, Harvard"
                        imagePath="/images/harvard_logo.png"
                        date="2024"
                    />
                    <EducationCard
                        title="The Complete Java Certification Course"
                        description="Udemy"
                        imagePath="/images/udemy_logo.png"
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

    // itemIcon: icon/emoji for the timeline dot
    // itemHeader: header and title for the timeline item
    // itemContent: description of the timeline item
    // itemFromDate: start date of the timeline item
    // itemToDate: end date of the timeline item

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
                <Typography variant="h6" component="span" sx={{fontWeight:'bold'}}>
                    {itemHeader}
                </Typography>
                <Typography>{itemContent}</Typography>
            </TimelineContent>
        </TimelineItem>
    </>
}

// card to display education / certification credentials
function EducationCard({ title, description, imagePath, date }:{ title:string, description:string, imagePath:string, date:string}) {
    
    // title: title of credential
    // description: description of credential
    // imagePath: local file path to image or logo of credential
    // date: date acquired
    
    return <>
        <Box>
            <Stack direction={'row'} sx={{
                display:'flex',
                justifyContent:'space-between'
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