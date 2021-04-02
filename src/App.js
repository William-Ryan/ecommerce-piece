import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Contact = () => {
    return (
        <div>
            <Typography variant={"h3"}>Contact Page</Typography>
            <Typography>
                <ul>
                    <li>Address: 233 W Artisan St, Williamsport, MD</li>
                    <li>Number: 123-123-1234</li>
                    <li>Email: churchy@gmail.com</li>
                </ul>
            </Typography>
        </div>
    )
}

export default Contact