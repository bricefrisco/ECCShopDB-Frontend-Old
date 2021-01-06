import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Forum = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <h3 className={classes.title}>Forum</h3>
            <p className={classes.description}>
                To <span className={classes.bold}>add your shop</span>, <span className={classes.bold}>make a suggestion</span>{', '}
                <span className={classes.bold}>report a bug</span>, or <span className={classes.bold}>provide feedback</span>, <br />please make a request
                on the <a href='https://ecocitycraft.com/forum/threads/shopdb-applications-suggestions-bug-reports-feedback-faq.205318/'
                          rel='noreferrer noopener'
                          target='_blank'
                          className={classes.link}>
                forum</a>.
            </p>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    background: {
        backgroundColor: '#323232',
        paddingTop: '100px',
        paddingBottom: '100px',
        color: 'rgba(255, 255, 255, 0.7)'
    },

    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '300',
    },

    description: {
        width: '100%',
        textAlign: 'center',
        fontSize: '1.25rem',
        lineHeight: '1.7',

        '@media (max-width: 850px)': {
            width: '90%',
            margin: 'auto'
        }
    },

    bold: {
        fontWeight: '500'
    },

    link: {
        color: '#3498db',
        textDecoration: 'none',

        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))

export default Forum