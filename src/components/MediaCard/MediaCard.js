import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";



const MediaCard = ({name,content,image,alt}) => {
    return (
        <Card sx={{ maxWidth:360 }} style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0px 10px 10px 12px rgba(0, 0, 0, 0.1)" }}>
            <CardMedia
                component="img"
                height="191"
                src={image}
                alt={alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                   {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    )
}

MediaCard.defaultProps={
    name:"Çukurova Üniversitesi",
    content:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image:"../../asset/image_3.jpg",
    alt:"Çukurova"
}

export default MediaCard