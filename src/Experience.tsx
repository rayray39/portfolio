import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Chip, Stack, Typography } from "@mui/material";


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
                    flex: 0.3,
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
        </Stack>
    );
}

export default Experience

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