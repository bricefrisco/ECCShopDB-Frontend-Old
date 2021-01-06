import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Player from './Player'

const Players = ({players}) => {
    const classes = useStyles()

    if (players === undefined || players === null) {
        return null;
    }

    if (players.length === 0) {
        return <div className={classes.noResultsFound}>No players found by that criteria.</div>
    }

    return players.map((player, idx) => <Player key={idx} player={player} />)
}

const useStyles = makeStyles(() => ({
    noResultsFound: {
        marginTop: '17px',
        marginBottom: '20px',
        color: 'rgba(255, 255, 255, 0.6)'
    }
}))

export default Players;