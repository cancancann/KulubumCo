import React from "react"
import Box from "@mui/material/Box"
import image from '../../asset/image.png';

const DetailBox = () => {
    return(
        <Box sx={{width:"742px",height:"395px",borderRadius:"6px"}} style={{backgroundImage:`url(${image})`,marginLeft:"4rem",marginTop:"3rem"}} />
    )
}

export default DetailBox