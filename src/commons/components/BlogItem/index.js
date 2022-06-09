import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icons from "../../../assets/icons/";
import "./style.scss";

export default function BlogItem({
   width = 367,
   height = 200,
   className = "",
}) {
   return (
      <Card className={`${className}`} sx={{ width: width }}>
         <CardMedia
            component="img"
            alt="green iguana"
            height={height}
            image={icons.blog1.default}
         />
         <CardContent>
            <Typography
               gutterBottom
               className="blog-title"
               variant="h5"
               component="div"
            >
               Lizard
            </Typography>
            <Typography variant="body2" className="blog-description">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
            </Typography>
         </CardContent>
         <CardActions>
            <div className="blog-info">
               <img src={icons.avt.default} />
               <p className="fullName">John Birmingham</p>
               <div className="rule"></div>
               <p className="date-time">25 December 2019</p>
            </div>
         </CardActions>
      </Card>
   );
}
