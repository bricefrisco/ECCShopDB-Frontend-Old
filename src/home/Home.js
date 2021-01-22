import React from 'react';
import { Link } from 'react-router-dom';

import Dugly from './Dugly';
import './home.css';

export const Home = () => {
  return (
    <>
      <div className='vh-100 center'>
        <section id='intro' className='background pt-100 pb-100'>
          <div className='container'>
            <h1 className='txt-lg weight-lite'>
              Welcome to{' '}
              <span className='weight-bold'>EcoCityCraft ShopDB!</span>
            </h1>
            <p className='txt-norm weight-lite'>
              An interactive search tool to find items to buy or sell on
              EcoCityCraft.
            </p>

            <div id='stats' className='flex flex-between pt-50'>
              <div className='flex flex-column'>
                <span className='txt-md weight-bold color-primary'>120+</span>
                <span className='txt-norm weight-lite pr-2'>shops</span>
              </div>

              <div className='flex flex-column'>
                <span className='txt-md weight-bold color-primary'>5,000+</span>
                <span className='txt-norm weight-lite pr-1'>chest shops</span>
              </div>

              <div className='flex flex-column'>
                <span className='txt-md weight-bold color-primary'>
                  100,000+
                </span>
                <span className='txt-norm weight-lite pr-2'>searches</span>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className='background-dark pt-100 pb-100'>
          <div className='container'>
            <h2 className='txt-lg weight-norm pb-50'>Features</h2>

            <div className='flex flex-around pb-50'>
              <div className='background p-5 main-feature'>
                <h3 className='txt-md weight-lite pb-3'>
                  Search for{' '}
                  <Link to='/search/chest-shops' className='link'>
                    chest shops
                  </Link>
                </h3>

                <p className='lh-md txt-norm weight-lite'>
                  Looking for something specific? Search for items to buy or
                  sell across many shops across each server. A stock counter is
                  included so you will know if the shop is in stock or full.
                </p>
              </div>
            </div>

            <div className='flex flex-around pb-50'>
              <div className='background p-5 feature'>
                <h3 className='txt-md weight-lite pb-3'>
                  View{' '}
                  <Link to='/search/regions' className='link'>
                    regions
                  </Link>
                </h3>

                <p className='lh-md txt-norm weight-lite'>
                  Get a breakdown of all towns and shops. Discover which of them
                  that you can explore next.
                </p>
              </div>

              <div className='background p-5 feature'>
                <h3 className='txt-md weight-lite pb-3'>
                  View{' '}
                  <Link to='/search/players' className='link'>
                    players
                  </Link>
                </h3>

                <p className='lh-md txt-norm weight-lite'>
                  Looking for someone? Find each player who either owns a town
                  or a chest shop, and discover when they were last /seen.
                </p>
              </div>
            </div>

            <div className='flex flex-around'>
              <div className='background p-5 feature'>
                <h3 className='txt-md weight-lite pb-3'>
                  Get{' '}
                  <Link to='/search/regions/main/store' className='link'>
                    region info
                  </Link>
                </h3>
                <p className='lh-md txt-norm weight-lite'>
                  View specific regions to discover where they are, who owns
                  them, and what they sell or buy.
                </p>
              </div>

              <div className='background p-5 feature'>
                <h3 className='txt-md weight-lite pb-3'>
                  Get{' '}
                  <Link to='/search/players/clarinetphoenix' className='link'>
                    player info
                  </Link>
                </h3>
                <p className='lh-md txt-norm weight-lite'>
                  View specific players to discover what towns they own, and
                  what items they sell or buy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='how-it-works' className='pt-100 pb-100 background'>
          <div className='container'>
            <h2 className='txt-lg weight-norm pb-50'>How it works</h2>

            <div className='grid'>
              <img src='/img/plugin.png' alt='Plugin' />
              <div className='description'>
                <h3 className='txt-md weight-lite pb-3'>EcoCityCraft Plugin</h3>
                <p className='lh-md txt-norm weight-lite'>
                  A custom server-side plugin captures shop events. These events
                  are sent to ShopDB every 10 minutes and are parsed to extract
                  information such as stock count, location, and items being
                  traded. This data is stored in a way that easily allows you to
                  search for shops you are looking for.
                </p>
              </div>

              <Dugly />
              <div className='description'>
                <h3 className='txt-md weight-lite pb-3'>EcoCityCraft Bot</h3>
                <p className='lh-md txt-norm weight-lite'>
                  Dugly is a bot that navigates around the game and adds new
                  regions and players last /seen times. He used to scan and
                  parse shops as well, but that job has been delegated to the
                  server-side plugin which has proved to be much more efficient
                  and reliable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='forum' className='pt-100 pb-100 background-dark'>
          <div className='container'>
            <h2 className='txt-lg weight-norm pb-50'>Forum</h2>
            <p className='lh-md txt-norm weight-lite'>
              To add your shop, make a suggestion, report a bug, or provide
              feedback, please visit the{' '}
              <a
                href='https://ecocitycraft.com/forum/threads/shopdb-applications-suggestions-bug-reports-feedback-faq.205318/'
                rel='noreferrer noopener'
                target='_blank'
                className='link'
              >
                forums
              </a>
              !
              <br /> If you are looking for any recent updates or changes, they
              can be found on{' '}
              <a
                href='https://ecocitycraft.com/forum/threads/beta-ecc-shopdb-search-find-and-update-shop-items.192909/'
                rel='noreferrer noopener'
                target='_blank'
                className='link'
              >
                this post
              </a>
              .
            </p>
          </div>
        </section>

        <section id='call-to-action' className='pt-100 pb-100 background'>
          <div className='container'>
            <h2 className='txt-lg weight-norm pb-50'>Search</h2>
            <p className='lh-md txt-norm weight-lite'>
              Ready to find shops and get the best prices? Go{' '}
              <Link to='/search/chest-shops' className='link'>
                search
              </Link>{' '}
              for them!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
