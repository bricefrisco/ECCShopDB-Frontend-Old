import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography'

import ServerOptions from './ServerOptions'
import OtherOptions from './OtherOptions'

const Filters = ({server, setServer, hideDisabledRegions, setHideDisabledRegions}) => {
    const classes = useStyles();

    return (
        <div className={classes.filters}>
            <Typography className={classes.filterOptionTitle}>Filters</Typography>

            <ServerOptions server={server} setServer={setServer} />
            <OtherOptions hideDisabledRegions={hideDisabledRegions} setHideDisabledRegions={setHideDisabledRegions} />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    filters: {
        minWidth: '275px',
        maxWidth: '350px',
        width: '30%',

        '@media (max-width: 680px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },

        '@media (max-width: 1030px)': {
            display: 'flex',
            maxWidth: '1030px',
            width: '100%',
            justifyContent: 'space-between',
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
    }
}))

export default Filters