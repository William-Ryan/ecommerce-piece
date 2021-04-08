import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    brandpic: {
        height: '8vh',
        width: '4%',
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <img className={classes.brandpic} src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Ecommerce%2Fbogomil-mihaylov-3iiR4ScIPjs-unsplash.jpg?alt=media&token=5f5181aa-4559-4e69-93eb-db49e5fb2e12" alt="Star image"></img>
            </div>
            <Typography variant={"h3"}>Header</Typography>
        </div>
    )
}

export default Header