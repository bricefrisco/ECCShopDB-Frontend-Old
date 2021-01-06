import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Introduction from './Introduction'
import HowItWorks from './HowItWorks'
import Forum from './Forum'
import Search from './Search'

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Introduction />
            <HowItWorks />
            <Forum />
            <Search />
        </div>
    )
}

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: '#373737',
        minHeight: '100vh'
    }
}))

export default Home;