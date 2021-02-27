import React from 'react';
import { Link } from 'react-router-dom';

import { CopyButton } from '../copy-button';
import './chest-shop.css';

export const Stock = ({ tradeType, count, isFull }) => {
  if (tradeType === 'buy' && count === 0) {
    return (
      <span className="block txt-xs weight-bold color-error">
        Out of stock (0 left)
      </span>
    );
  }

  if (tradeType === 'buy' && count !== 0) {
    return (
      <span className="block txt-xs weight-bold color-primary">
        In stock ({count} left)
      </span>
    );
  }

  if (tradeType === 'sell' && isFull) {
    return (
      <span className="block txt-xs weight-bold color-error">
        Full (count: {count})
      </span>
    );
  }

  if (tradeType === 'sell' && !isFull) {
    return (
      <span className="block txt-xs weight-bold color-primary">
        Available (count: {count})
      </span>
    );
  }
};

export const ShopInfo = ({
  tradeType,
  quantity,
  item,
  count,
  price,
  player,
  region,
  server,
  isFull,
}) => {
  return (
    <div>
      <span className="block txt-sm weight-bold pb-1">
        {tradeType === 'buy' ? 'Selling' : 'Buying'} {quantity} {item} for $
        {(price / quantity).toFixed(2)} each
      </span>
      <span className="block txt-sm weight-lite pb-1">
        By{' '}
        <Link to={`/search/players/${player}`} className="link weight-bold">
          {player}
        </Link>{' '}
        • in{' '}
        <Link
          to={`/search/regions/${server}/${region}`}
          className="link weight-bold"
        >
          {region}
        </Link>{' '}
        <i>({server})</i>
      </span>
      <Stock tradeType={tradeType} count={count} isFull={isFull} />
    </div>
  );
};

export const ShopDescription = ({
  player,
  tradeType,
  quantity,
  item,
  region,
  price,
}) => {
  return (
    <span className="ml-80 block pt-4 pb-4 txt-sm">
      {player} is {tradeType === 'buy' ? 'selling' : 'buying'} {quantity} {item}{' '}
      in {region} for ${price}
    </span>
  );
};

export const ChestShop = ({ chestShop, tradeType }) => {
  return (
    <div className="chest-shop background-dark p-5 mt-3 mb-5">
      <div className="flex">
        <img
          className="mc-avatar mr-3"
          src={`https://minotar.net/avatar/${chestShop.owner.name}/60`}
          alt="Avatar"
        />
        <ShopInfo
          tradeType={tradeType}
          quantity={chestShop.quantity}
          item={chestShop.material}
          count={chestShop.quantityAvailable}
          price={tradeType === 'buy' ? chestShop.buyPrice : chestShop.sellPrice}
          player={chestShop.owner.name}
          region={chestShop.town.name}
          server={chestShop.server}
          isFull={chestShop.full}
        />
      </div>
      <ShopDescription
        player={chestShop.owner.name}
        tradeType={tradeType}
        quantity={chestShop.quantity}
        item={chestShop.material}
        region={chestShop.town.name}
        price={tradeType === 'buy' ? chestShop.buyPrice : chestShop.sellPrice}
      />
      <CopyButton
        text="Copy Warp"
        copyText={`/warp ${chestShop.town.name}`}
        className="ml-80 mt-2 txt-xs button-primary"
      />
      <CopyButton
        text="Copy Coordinates"
        copyText={`${chestShop.location.x} ${chestShop.location.y} ${chestShop.location.z}`}
        className="ml-2 mt-2 txt-xs button-primary"
      />
      <span className="ml-80 block mt-4 shop-coordinates txt-xs">
        Coordinates: {chestShop.location.x} {chestShop.location.y}{' '}
        {chestShop.location.z}
      </span>
    </div>
  );
};
