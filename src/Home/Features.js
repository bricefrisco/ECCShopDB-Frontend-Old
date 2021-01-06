import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const Features = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <div className={classes.intro}>Features</div>
            <div className={classes.step}>
                <img className={classes.monitor} src='/img/Search.png' alt='Chest shops example' />
                <div className={classes.stepContent}>
                    <div className={classes.title}>
                        Search for <Link to='/search/chest-shops' className={classes.link}>items</Link>
                    </div>

                    <div className={classes.description}>
                        Looking for something specific? Search for items to
                        buy or sell across many shops across each server.
                        Stock counter is included, so you'll know if the shop is in stock.
                    </div>
                </div>
            </div>

            <div className={classes.step}>
                <img className={classes.monitor} src='/img/Regions.png' alt='RegionsPanel example' />
                <div className={classes.stepContent}>
                    <div className={classes.title}>
                        View <Link to='/search/regions' className={classes.link}>regions</Link>
                    </div>

                    <div className={classes.description}>
                        Get a breakdown of all regions. <br />
                        See which shops or towns you can explore next.
                    </div>

                </div>
            </div>

            <div className={classes.step}>
                <img className={classes.monitor} src='/img/Players.png' alt='Players example' />
                <div className={classes.stepContent}>
                    <div className={classes.title}>
                        View <Link to='/search/players' className={classes.link}>players</Link>
                    </div>

                    <div className={classes.description}>
                        Looking for someone? Find each player who
                        owns a town, or a shop sign, and see their last /seen time.
                    </div>
                </div>
            </div>

            <div className={classes.step}>
                <img className={classes.monitor} src='/img/ABCRegion.png' alt='Region example' />
                <div className={classes.stepContent}>
                    <div className={classes.title}>
                        Get <Link to='/search/regions/main/store' className={classes.link}>region info</Link>
                    </div>

                    <div className={classes.description}>
                        Who owns that town? What does that town sell? Where is that town?
                        Go find out!
                    </div>
                </div>
            </div>

            <div className={classes.step}>
                <img className={classes.monitor} src='/img/Player.png' alt='Player example' />
                <div className={classes.stepContent}>
                    <div className={classes.title}>
                        Get <Link to='/search/players/clarinetphoenix' className={classes.link}>player info</Link>
                    </div>

                    <div className={classes.description}>
                        Want to know what items you need to stock up on? Easily find
                        out by going to your own player page.
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    intro: {
        fontSize: '3rem',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '100px'
    },

    background: {
        backgroundColor: '#323232',
        paddingTop: '100px',
        paddingBottom: '100px'
    },

    step: {
        width: '1000px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',

        '@media (max-width: 850px)': {
            flexDirection: 'column'
        },

        '@media (max-width: 1000px)': {
            width: '100%'
        }
    },

    title: {
        fontSize: '2rem',
        fontWeight: '600',

        '@media (max-width: 850px)': {
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '10px'
        },
    },

    description: {
        fontSize: '1.125rem',
        marginTop: '30px',
        lineHeight: '1.5',
        width: '500px',

        '@media (max-width: 850px)': {
            textAlign: 'center',
            width: '90%',
            margin: 'auto'
        },
    },

    monitor: {
        width: '250px',
        height: 'auto',
        marginRight: '50px',

        '@media (max-width: 850px)': {
            marginRight: '0'
        },
    },

    link: {
        textDecoration: 'none',
        color: '#3498db',

        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))

export default Features;