import React from 'react'

import SearchNavigation from './SearchNavigation'
import ChestShops from './ChestShops/ChestShops'
import Regions from './Regions/Regions'
import Players from './Players/Players'

const Search = ({page}) => {

    return (
        <>
            <SearchNavigation page={page} />
            {page === 'chest-shops' && <ChestShops />}
            {page === 'regions' && <Regions />}
            {page === 'players' && <Players />}
        </>
    )
}

export default Search;