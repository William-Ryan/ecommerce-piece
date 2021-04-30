import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const MarketListing = () => {
    const [marketItem, setMarketItem] = useState({
        name: '',
        category: '',
        quantity: 0,
        seller: '',
        status: '',
        description: ''
    })

    return (
        <div>
            <Typography variant={"h3"}>MarketListing Page</Typography>
        </div>
    )
}

export default MarketListing