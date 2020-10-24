import { Card, CardContent,Typography } from '@material-ui/core';
import React from 'react';
import './InfoBox.css';

function InfoBox({title, cases, active, isRed, total, ...props}) {
    return (
        <Card 
        onClick={props.onClick}
        className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
           <CardContent>
               {/* title = coronavirus cases */}
               <Typography className="infoBox__title" color="textSecondary">
                   {title}
               </Typography>
               {/* number of cases  = +120k cases */}
               <h2 className={`infoBox__cases ${!isRed && "infoBox--green"}`}>{cases}</h2>
               <Typography className="infoBox__total" color="textSecondary">
                {/* total = 1.2M total */}
                   {total} Total
               </Typography>
           </CardContent> 
        </Card>
    );
}

export default InfoBox;
