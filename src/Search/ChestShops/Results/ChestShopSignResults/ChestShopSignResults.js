import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import TopPanel from '../TopPanel/TopPanel';
import ChestShopSigns from './ChestShopSigns';
import BottomPagination from './BottomPagination';
import Loading from './Loading';

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
  signs,
}) => {
  const classes = useStyles();

  const [alertOpen, setAlertOpen] = React.useState(true);

  return (
    <div className={classes.searchResults}>
      <Collapse in={alertOpen}>
        <Alert
          severity='info'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          All chest shops have been cleared after an update. Please read{' '}
          <a
            href='https://ecocitycraft.com/forum/threads/beta-ecc-shopdb-search-find-and-update-shop-items.192909/page-9#post-1107111'
            className='alertLink'
            target='_blank'
            rel='noopener noreferrer'
          >
            the forum post
          </a>{' '}
          for more info!
        </Alert>
      </Collapse>

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
      />

      {loading ? (
        <Loading />
      ) : (
        <ChestShopSigns signs={signs} tradeType={tradeType} server={server} />
      )}
      {!loading && pagination && (
        <BottomPagination
          page={page}
          setPage={setPage}
          totalPages={Math.ceil(pagination['totalElements'] / 10)}
        />
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  searchResults: {
    width: '100%',
    marginLeft: '100px',

    '@media(max-width: 1030px)': {
      marginLeft: '0px',
    },
  },
}));

export default ChestShopSignResults;
