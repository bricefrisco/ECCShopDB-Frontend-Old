import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Region from './Region'

const Regions = ({regions}) => {
    const classes = useStyles()

    if (regions === undefined || regions === null) {
        return null;
    }

    if (regions.length === 0) {
        return <div className={classes.noResultsFound}>No regions found by that criteria.</div>
    }

    return regions.map((region, idx) => <Region key={idx} region={region} />)
}

const useStyles = makeStyles(() => ({
    noResultsFound: {
        marginTop: '17px',
        marginBottom: '20px',
        color: 'rgba(255, 255, 255, 0.7)'
    }
}))

export default Regions