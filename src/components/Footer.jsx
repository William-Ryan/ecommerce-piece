import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    footerContainer: {
        marginTop: "calc(5% + 60px)",
        bottom: 0,
    },
    footerText: {
        textAlign: "center",
        fontStyle: "italic",
        background: "yellow",
        color: "navy",
        border: "2px solid gray",
        opacity: "60%",
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <Typography className={classes.footerText}>ecommerce portfolio piece for William Ryan's portfolio page</Typography>
        </div>
    )
}

export default Footer;