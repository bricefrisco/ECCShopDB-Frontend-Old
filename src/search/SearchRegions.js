import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
  getOptions,
  setServer,
  setHideNonShopTowns,
} from '../state/regionsSlice';

import { Filter, ServerFilter } from '../shared/filters';
import Regions from './Regions';

const SearchRegions = () => {
  const dispatch = useDispatch();
  const options = useSelector(getOptions);

  return (
    <section id='regions' className='background vh-100 pt-50'>
      <div className='container flex'>
        <div id='filters'>
          <h3 className='color-white weight-bold txt-sm'>Filters</h3>
          <ServerFilter
            value={options.server}
            setValue={(e) => dispatch(setServer(e.target.value))}
          />

          <Filter title='Options'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.hideNonShopTowns}
                  onChange={(e) =>
                    dispatch(setHideNonShopTowns(e.target.checked))
                  }
                />
              }
              label='Hide Non-Shop Towns'
            />
          </Filter>
        </div>

        <Regions />
      </div>
    </section>
  );
};

export default SearchRegions;
