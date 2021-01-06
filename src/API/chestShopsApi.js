export const fetchChestShopSigns = (page, server, tradeType, sortBy, hideIdenticalSigns, hideOutOfStockSigns, material) => {
    const url = new URL(`${process.env.REACT_APP_BACKEND}/chest-shops`)
    url.searchParams.append('tradeType', tradeType)
    url.searchParams.append('sortBy', sortBy)
    url.searchParams.append('page', page)

    if (server !== 'all') {
        url.searchParams.append('server', server)
    }

    if (hideIdenticalSigns) {
        url.searchParams.append('filterIdenticalSigns', 'true')
    }

    if (hideOutOfStockSigns) {
        url.searchParams.append('hideOutOfStock', 'true')
    }

    if (material) {
        url.searchParams.append('material', material.value)
    }

    return fetch(url).then(response => response.json())
}

export const fetchMaterialNames = (server, tradeType) => {
    return fetch(`${process.env.REACT_APP_BACKEND}/chest-shops/material-names?server=${server}&tradeType=${tradeType}`)
        .then(response => response.json())
}