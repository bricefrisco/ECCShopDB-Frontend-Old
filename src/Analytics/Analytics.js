import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";

import SortBy from './Panels/SortBy'
import RealtimePanel from './Panels/RealtimePanel'
import ChestShopsPanel from './Panels/ChestShopsPanel'
import RegionsPanel from './Panels/RegionsPanel'
import PlayersPanel from './Panels/PlayersPanel'
import PlayerPanel from './Panels/PlayerPanel'
import RegionPanel from './Panels/RegionPanel'

const Analytics = () => {
    const classes = useStyles()

    const [analyticsType, setAnalyticsType] = useState('realtime')

    return (
        <div className={classes.background}>
            <Container maxWidth='lg' className={classes.container}>
                <SortBy analyticsType={analyticsType}
                        setAnalyticsType={(event) => setAnalyticsType(event.target.value)}/>
                {analyticsType === 'realtime' && <RealtimePanel/>}
                {analyticsType === 'chest-shops' && <ChestShopsPanel />}
                {analyticsType === 'regions' && <RegionsPanel />}
                {analyticsType === 'players' && <PlayersPanel />}
                {analyticsType === 'player' && <PlayerPanel />}
                {analyticsType === 'region' && <RegionPanel />}
            </Container>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: '#373737',
        minHeight: 'calc(110vh)',
        paddingTop: '50px',
        display: 'flex',

        '@media (max-width: 1030px)': {
            paddingTop: '0px'
        }
    },

    container: {
        display: 'flex',
        '@media (max-width: 1030px)': {
            display: 'block'
        }
    }
}))

export default Analytics;