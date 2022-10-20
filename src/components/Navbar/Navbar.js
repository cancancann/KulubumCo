import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
// import PropTypes from "prop-types";


const Navbar = () => {
    const navItems = ['Beranda', 'Tutorial', 'Pemrograman', 'İletişim'];
    return (
        <AppBar position="fixed" style={{backgroundColor:"#02A28F"}}>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
                >
                    KULUBUM.CO
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                    ))}
                </Box>
                <SearchIcon/> 
            </Toolbar>
        </AppBar>
    )
}

// Navbar.PropTypes{

// }

export default Navbar