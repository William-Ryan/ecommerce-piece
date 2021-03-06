import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const headerTheme = createMuiTheme({
    brandName: {
        fontFamily: 'Helvetica Neue',
    }
})

const useStyles = makeStyles(() => ({
    headerBox: {
        display: "flex",
        padding: "0% 0% 0.5% 0%",
        width: "100%",
        backgroundColor: "gray",
        outline: "1.5px solid"
    },
    picBox: {
        width: '6%',
        margin: "0% 1% 0% 0%"
    },
    brandPic: {
        height: '12vh',
        width: '100%',
        outline: "0.5px solid"
    },
    textBox: {
        margin: "0% 0% 0% 1%"
    },
    brandText: {
        fontFamily: "Helvetica Neue",
        color: "lightgreen",
        textShadow: "-4px -1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        fontSize: "4rem"
    },
    subText: {
        fontFamily: "Helvetica Neue",
        color: "lime",
        textShadow: "-4px -1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        fontSize: "2rem"
    },
}))

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.headerBox}>
            <div className={classes.picBox}>
                <img className={classes.brandPic} src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Ecommerce%2Fbogomil-mihaylov-3iiR4ScIPjs-unsplash.jpg?alt=media&token=5f5181aa-4559-4e69-93eb-db49e5fb2e12" alt="Star"></img>
            </div>
            <div>
                <Typography className={classes.brandText} variant={"h3"}>Marketplace</Typography>
                <Typography className={classes.subText} variant={"h6"}>The Easy Market</Typography>
            </div>
        </div>
    )
}

export default Header