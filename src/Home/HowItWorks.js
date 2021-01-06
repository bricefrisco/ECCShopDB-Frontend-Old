import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Dugly from './Dugly'

const HowItWorks = () => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <div className={classes.intro}>How it works</div>
            <div className={classes.dugly}>
                <Dugly />
                <div className={classes.desc}>
                    <h3 className={classes.title}>Meet <span className={classes.bold}>Dugly</span>.</h3>
                    <p className={classes.description}>
                        Dugly is a Minecraft bot and market extraordinaire. He automatically navigates from shop to shop
                        to gather data, and sends that data to us. We process that data into a format that can be
                        easily searched and displayed. <br /> <br />
                        Dugly works around the clock - his schedule is below.
                    </p>
                </div>
            </div>
            <div className={classes.scheduleBox}>
                <img className={classes.schedule} src='/img/ABCSchedule.png' alt='Updation schedule' />
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: '#373737',
        paddingTop: '100px',
        paddingBottom: '100px',
        color: 'rgba(255, 255, 255, 0.7)'
    },

    intro: {
        fontSize: '3rem',
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: '50px'
    },

    dugly: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1000px',
        margin: 'auto',

        '@media (max-width: 850px)': {
            flexDirection: 'column'
        },
    },

    title: {
        fontSize: '2rem',
        fontWeight: '400'
    },

    desc: {
        marginLeft: '40px',

        '@media (max-width: 850px)': {
            marginLeft: '20px',
            marginRight: '20px'
        },
    },

    bold: {
        fontWeight: '500'
    },

    description: {
        fontSize: '1.20rem',
        marginTop: '30px',
        lineHeight: '1.7',
        width: '500px',

        '@media (max-width: 850px)': {
            width: '100%'
        },
    },

    scheduleBox: {
        width: '100%',
        textAlign: 'center'
    },

    schedule: {
        width: '1000px',
        height: 'auto',

        '@media (max-width: 1001px)': {
            width: '100%'
        }
    }
}))

export default HowItWorks;