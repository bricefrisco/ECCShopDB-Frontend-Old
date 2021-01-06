import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ChestShopSign from './ChestShopSign'
import TopPanel from './TopPanel'
import Loading from '../Loading'
import BottomPagination from './BottomPagination'

import { fetchPlayerSigns } from '../../../API/playersApi';

const ChestShopSigns = ({player, tradeType}) => {
    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [signs, setSigns] = useState(undefined)
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(undefined)

    useEffect(() => {
        if (tradeType === undefined || player === undefined) {
            return
        }

        setLoading(true)

        fetchPlayerSigns(player, tradeType, page)
            .then(response => {
                setPagination({
                    currentPage: response.currentPage,
                    totalPages: response.totalPages,
                    totalElements: response.totalElements
                })
                setSigns(response.results)
                setLoading(false)
            })
    }, [player, tradeType, page])

    const onPageChange = (event, newPage) => {
        setPage(newPage + 1)
    }

    if (player === undefined || tradeType === undefined) {
        return null
    }

    if (loading || signs === undefined) {
        return (
            <div className={classes.background}>
                <Container maxWidth='lg' className={classes.container}>
                    <TopPanel loading={loading} pagination={pagination} setPage={onPageChange} />
                    <Loading />
                </Container>
            </div>
        )
    }

    if (signs.length === 0) {
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
                {signs.map((sign, idx) => <ChestShopSign key={idx} sign={sign} tradeType={tradeType} />)}
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

export default ChestShopSigns;