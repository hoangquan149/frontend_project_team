import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import icons from "../../../assets/icons";
import "./style.scss";

export default function MessageItem({
   className,
   time = "",
   content = "",
   listActions = [],
   pin = "",
}) {
   return (
      <Card className={`card ${className}`}>
         <CardContent>
            <Typography className={"card-time"} gutterBottom>
               {time}
            </Typography>
            <Typography className={"card-content"} variant="h5" component="div">
               {content}
            </Typography>
         </CardContent>
         <CardActions>
            <div className="card-actions">
               {listActions.map((action, index) => {
                  return (
                     <button key={index}>
                        <img src={action} />
                     </button>
                  );
               })}
            </div>
            {pin && (
               <div className="pin">
                  <img src={icons.pin.default} />
                  <span>{pin}</span>
               </div>
            )}
         </CardActions>
      </Card>
   );
}
