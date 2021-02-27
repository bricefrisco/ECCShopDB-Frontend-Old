import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
  getOptions,
  setTradeType,
  setServer,
  setHideOutOfStock,
  setSortBy,
  setHideFull, setHideDistinct,
} from '../state/chestShopsSlice';
import {Filter, TradeTypeFilter, ServerFilter} from '../shared/filters';
import {Select} from '../shared/select';
import ChestShops from './ChestShops';

import './search.css';

const SearchChestShops = () => {
  const dispatch = useDispatch();
  const options = useSelector(getOptions);

  const sortByOptionsBuy = [
    {value: 'best-price', label: 'Best Price'},
    {value: 'quantity', label: 'Quantity'},
    {value: 'quantity-available', label: 'Quantity Available'},
  ];

  const sortByOptionsSell = [
    {value: 'best-price', label: 'Best Price'},
    {value: 'quantity', label: 'Quantity'},
  ]

  return (
    <section id="chest-shops" className="background vh-100 pt-50">
      <div className="container flex">
        <div id="filters">
          <h3 className="color-white weight-bold txt-sm">Filters</h3>
          <TradeTypeFilter
            value={options.tradeType}
            setValue={(e) => dispatch(setTradeType(e.target.value))}
          />
          <ServerFilter
            value={options.server}
            setValue={(e) => dispatch(setServer(e.target.value))}
          />

          <Filter title='Options'>
            {options.tradeType === 'buy' ? (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.hideOutOfStock}
                    onChange={(e) =>
                      dispatch(setHideOutOfStock(e.target.checked))
                    }
                  />
                }
                label="Hide Unavailable Shops"
              />
            ) : (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={options.hideFull}
                    onChange={(e) => dispatch(setHideFull(e.target.checked))}
                  />
                }
                label="Hide Unavailable Shops"
              />
            )}

            <FormControlLabel
              control={<Checkbox checked={options.hideDistinct} onChange={(e) => dispatch(setHideDistinct(e.target.checked))}/>}
              label='Unique Shops Only'/>

          </Filter>

          <Filter title="Sort By">
            <Select
              className="sort-by-selector"
              value={options.sortBy}
              setValue={(e) => dispatch(setSortBy(e))}
              options={options.tradeType === 'buy' ? sortByOptionsBuy : sortByOptionsSell}
              isSearchable={false}
            />
          </Filter>
        </div>

        <ChestShops/>
      </div>
    </section>
  );
};

export default SearchChestShops;
