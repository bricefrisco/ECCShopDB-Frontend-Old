import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { getOptions, setHideInactivePlayers } from '../state/playersSlice';

import { Filter } from '../shared/filters';
import Players from './Players';

const SearchPlayers = () => {
  const dispatch = useDispatch();
  const options = useSelector(getOptions);

  return (
    <section id='players' className='background vh-100 pt-50'>
      <div className='container flex'>
        <div id='filters'>
          <h3 className='color-white weight-bold txt-sm'>Filters</h3>
          <Filter title='Options'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.hideInactivePlayers}
                  onChange={(e) =>
                    dispatch(setHideInactivePlayers(e.target.checked))
                  }
                />
              }
              label='Hide Inactive Players'
            />
          </Filter>
        </div>

        <Players />
      </div>
    </section>
  );
};

export default SearchPlayers;
