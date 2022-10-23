
import React from "react";
// import Button  from "@mui/material/Button"
import Stack from "@mui/material/Stack";
import SnackBarContent from '@mui/material/SnackbarContent';


const CategorisesBar = () => {
//Padding margin işlemler ayarlanacak .. ya da direk divle yapılacak.

    return (
        <Stack spacing={2} sx={{ maxWidth: 90 }} 
        style={{  }}>
            <SnackBarContent 
            message="KATEGORİLER" 
            style={{backgroundColor:"#02A28F",position: "absolute"
            ,width: "360px", height: "48px" ,borderRadius:"10px"
            ,boxShadow:"0px 10px 10px rgba(0 ,0 ,0 ,0.1)",marginTop:"3.9rem"}} />
        </Stack>
    )

}

export default CategorisesBar;