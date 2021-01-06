import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import TopPanel from '../TopPanel/TopPanel'
import ChestShopSigns from './ChestShopSigns'
import BottomPagination from './BottomPagination'
import Loading from './Loading'

const ChestShopSignResults = ({
    loading,
    pagination,
    page,
    setPage,
    tradeType,
    server,
    material,
    onMaterialChange,
    hideOutOfStockSigns,
    hideIdenticalSigns,
    signs
                              }) => {
  const classes = useStyles()

  return (
    <div className={classes.searchResults}>
      <TopPanel
        loading={loading}
        pagination={pagination}
        page={page}
        setPage={setPage}
        tradeType={tradeType}
        server={server}
        material={material}
        onMaterialChange={onMaterialChange}
        hideOutOfStockSigns={hideOutOfStockSigns}
        hideIdenticalSigns={hideIdenticalSigns}
      />

      {loading ? <Loading /> : <ChestShopSigns signs={signs} tradeType={tradeType} server={server} />}
      {!loading && pagination && <BottomPagination page={page} setPage={setPage} totalPages={Math.ceil(pagination['totalElements'] / 10)} />}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  searchResults: {
    width: '100%',
    marginLeft: '100px',

      '@media(max-width: 1030px)': {
        marginLeft: '0px'
      }
  }
}))

export default ChestShopSignResults