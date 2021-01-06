import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";

const CopyButton = ({text, copyText}) => {
    const classes = useStyles()
    const [copied, setCopied] = useState(false)
    const [timeout, setCTimeout] = useState(undefined)

    useEffect(() => {
        return () => {
            if (timeout && copied) {
                clearTimeout(timeout)
            }
        }
    }, [timeout, copied])

    const copy = (event) => {
        event.stopPropagation()
        navigator.clipboard.writeText(copyText)
        setCopied(true)
        setCTimeout(setTimeout(() => setCopied(false), 2000))
    }

    return (
        <Tooltip title={copied ? 'Copied!' : `Copy '${copyText}'`} placement='top'>
            <span className={classes.button} onClick={copy}>{text}</span>
        </Tooltip>
    )
}

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#242526',
        fontSize: '12px',
        padding: '6px 10px',
        lineHeight: '12px',
        color: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '2px',
        marginRight: '8px',

        '&:hover': {
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.8)'
        }
    },
}))

export default CopyButton;