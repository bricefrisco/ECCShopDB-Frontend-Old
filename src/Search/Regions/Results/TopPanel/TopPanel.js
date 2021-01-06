import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TopPagination from "./TopPagination";
import Badges from "./Badges";
import RegionNameSearch from '../../Filters/RegionNameSearch'

const TopPanel = ({server, hideDisabledRegions, name, setName, loading, pagination, regions, setPage}) => {
    const classes = useStyles()

    return (
        <div className={classes.searchPanel}>
            <div className={classes.flexBetween}>
                <div className={classes.paginationColumn}>

                    {loading ? (
                        <div className={classes.loading}>
                            <span className={classes.loadingText}>Loading...</span>
                        </div>
                    ) : (
                        <TopPagination
                            pagination={pagination}
                            setPage={setPage}
                            labelTextEnd={'regions.'}
                        />
                    )}

                    <Badges badges={
                        [
                            server && `server:${server}`,
                            name && `name:${name.value}`,
                        ]
                    } />

                </div>
                <RegionNameSearch name={name} setName={setName} server={server} hideDisabledRegions={hideDisabledRegions} />
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    searchPanel: {
        width: '100%',
        marginBottom: '10px'
    },

    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px',

        '@media (max-width: 650px)': {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    },

    paginationColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },

    loading: {
        height: '45px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },

    loadingText: {
        marginTop: '10px',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.7)'
    }
}))

export default TopPanel