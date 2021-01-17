import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOptions,
  fetchChestShops,
  setPage,
  getResults,
  getError,
  getErrorMessage,
  getLoading,
  getTotalResults,
  getMaterials,
  fetchMaterials,
  setMaterial,
} from '../state/chestShopsSlice';

import { Select } from '../shared/select';
import { TopPagination } from '../shared/top-pagination';

const ChestShops = () => {
  const dispatch = useDispatch();

  const options = useSelector(getOptions);
  const results = useSelector(getResults);
  const totalResults = useSelector(getTotalResults);
  const error = useSelector(getError);
  const errorMessage = useSelector(getErrorMessage);
  const loading = useSelector(getLoading);
  const materials = useSelector(getMaterials);

  useEffect(() => {
    dispatch(fetchChestShops());
  }, [options]);
  return (
    <div className='w-100'>
      <div className='flex flex-between flex-center'>
        <TopPagination
          page={options.page}
          setPage={(e, page) => dispatch(setPage(page + 1))}
          count={totalResults}
          labelTextEnd={'chest shops.'}
          loading={loading}
        />

        <Select
          className='item-selector'
          placeholder='Item Name...'
          onFocus={() => dispatch(fetchMaterials())}
          setValue={(e, v) => dispatch(setMaterial(e))}
          loading={materials.loading}
          options={materials.results}
          windowed
        />
      </div>
    </div>
  );
};

export default ChestShops;
