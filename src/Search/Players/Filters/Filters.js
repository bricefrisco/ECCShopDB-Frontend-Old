import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography'

import OtherOptions from './OtherOptions'

const Filters = ({hideInactivePlayers, setHideInactivePlayers}) => {
    const classes = useStyles();

    return (
        <div className={classes.filters}>
            <Typography className={classes.filterOptionTitle}>Filters</Typography>

            <OtherOptions hideInactivePlayers={hideInactivePlayers} setHideInactivePlayers={setHideInactivePlayers} />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    filters: {
        minWidth: '275px',
        maxWidth: '350px',
        width: '30%',

        '@media (max-width: 1030px)': {
            display: 'flex',
            maxWidth: '1030px',
            width: '100%',
            justifyContent: 'space-around',
            marginBottom: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
        }
    },

    filterOptionTitle: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '500',
        fontSize: '15px',

        '@media (max-width: 1030px)': {
            display: 'none'
        }
    },
}))

export default Filters