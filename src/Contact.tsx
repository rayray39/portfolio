import Stack from "@mui/material/Stack";
import SectionStarter from "./SectionStarter";

function Contact() {

    return <>
        <Stack sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginBottom:'80px',
            marginTop:'80px'
        }}>
            <SectionStarter 
                buttonContent="Contact" 
                sectionHeader="Get In Touch ✌🏼" 
                sectionContent={
                    <>
                        Let's connect! Feel free to reach out via <a href="https://www.linkedin.com/in/rayray39/">LinkedIn</a> and I'll get back to you as soon as I can.
                    </>
                }
            />
        </Stack>
    </>
}

export default Contact