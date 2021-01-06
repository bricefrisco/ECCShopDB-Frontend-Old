import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Player from './Player'
import TopPanel from './TopPanel'
import Loading from '../Loading'
import BottomPagination from './BottomPagination'
import Container from "@material-ui/core/Container";

import { getPlayersByRegion } from '../../../API/regionApi'

const Players = ({region}) => {
    const classes = useStyles()

    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(undefined)
    const [players, setPlayers] = useState(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (region === undefined) {
            return
        }

        setLoading(true)

        getPlayersByRegion(region.server, region.name, page)
            .then(response => {
                setPagination({
                    currentPage: response.currentPage,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
                setPlayers(response.results)
                setLoading(false)
            })
    }, [region, page])

    const onPageChange = (event, newPage) => {
        setPage(newPage + 1)
    }

    if (region === undefined || region === null) {
        return null;
    }

    if (loading || players === undefined) {
        return (
            <div className={classes.background}>
                <Container maxWidth='lg' className={classes.container}>
                    <TopPanel loading={loading} pagination={pagination} setPage={onPageChange} />
                    <Loading />
                </Container>
            </div>
        )
    }

    if (players.length === 0) {
        return (
            <div className={classes.background}>
                <Container maxWidth='lg' className={classes.container}>
                    <TopPanel loading={loading} pagination={pagination} setPage={onPageChange} />
                    <div className={classes.noResultsFound}>No results found.</div>
                    <BottomPagination setPage={onPageChange} totalPages={pagination.totalPages} page={pagination.currentPage} />
                </Container>
            </div>
        )
    }

    return (
        <div className={classes.background}>
            <Container maxWidth='lg' className={classes.container}>
                <TopPanel loading={loading} pagination={pagination} setPage={onPageChange} />
                {players.map((player, idx) => <Player key={idx} player={player} />)}
                <BottomPagination setPage={onPageChange} totalPages={pagination.totalPages} page={pagination.currentPage} />
            </Container>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    background: {
        width: '100%',
        minHeight: 'calc(100vh)',
        backgroundColor: '#242526',
        paddingTop: '40px',
        paddingBottom: '40px'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    noResultsFound: {
        marginTop: '17px',
        marginBottom: '20px',
        color: 'rgba(255, 255, 255, 0.6)'
    }
}))

export default Players;