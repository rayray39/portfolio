import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

function SectionStarter({ buttonContent, sectionHeader, sectionContent }:{buttonContent:string, sectionHeader:string, sectionContent:string}) {
    const SMALL_SECTION_CONTENT_FONTSIZE = '20px';
    // 
    // 

    return <>
        <Button size="small" sx={{
            bgcolor:'black',
            color:'white', 
            borderRadius:'18px', 
            paddingLeft:'20px', 
            paddingRight:'20px'
        }}>{buttonContent}</Button>
        <Box sx={{
            textAlign:'center',
            fontWeight:'bold',
            fontSize:'40px',
            marginTop:'5px'
        }}>
            {sectionHeader}
        </Box>
        <Box sx={{
            fontSize:SMALL_SECTION_CONTENT_FONTSIZE,
            textAlign:'center',
            marginTop: '10px',
            width:'70%'
        }}>
            {sectionContent}
        </Box>
    </>
}   

export default SectionStarter