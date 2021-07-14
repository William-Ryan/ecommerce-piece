import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '20%',
        padding: '4% 0%',
        margin: '8.9% auto',
        fontSize: '1.3rem',
        lineHeight: '3rem'
    },
})

const Contact = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardMedia />
                <CardContent>
                <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }}>Contact Me</Typography>
                <address>
                    <ul>
                        <li>Email: billy.ryan.rom@gmail.com</li>
                        <li>Message my <a href="https://www.linkedin.com/in/william-ryan-34a1981a1/">LinkedIn Account</a></li>
                    </ul>
                </address>
            </CardContent>
        </Card>
    )
}

export default Contact;