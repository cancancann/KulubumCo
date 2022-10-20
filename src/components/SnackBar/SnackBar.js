import React from "react";
// import Button  from "@mui/material/Button"
import Stack from "@mui/material/Stack";
import SnackBarContent from '@mui/material/SnackbarContent';


const SnackBar = () => {
    const action = (
        <a href="#">
            Detaylı bilgi için tıklayınız..
        </a>
    );

    return (
        <Stack spacing={2} sx={{ maxWidth: 740 }} 
        style={{  }}>
            <SnackBarContent 
            message="Duyurular" 
            action={action} 
            style={{backgroundColor:"#02A28F",position: "absolute", width: "744px", height: "48px" ,borderRadius:"10px"}} />
        </Stack>
    )

}

export default SnackBar;