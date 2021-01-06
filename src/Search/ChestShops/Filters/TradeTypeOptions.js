import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const TradeTypeOptions = ({tradeType, setTradeType}) => {
    const classes = useStyles()
    const materialClasses = useMaterialStyles()

    return (
        <div>
            <Typography className={classes.optionText}>Trade Type</Typography>
            <RadioGroup classes={materialClasses} value={tradeType} onChange={setTradeType}>
                <FormControlLabel value="buy" control={<Radio />} label="Buy"/>
                <FormControlLabel value="sell" control={<Radio />} label="Sell"/>
            </RadioGroup>
        </div>
    )
}

const useMaterialStyles = makeStyles(() => ({
    root: {
        '& .MuiSvgIcon-root': {
            fontSize: '1rem'
        },

        '& span': {
            color: '#6ba65e'
        },

        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: '#6ba65e'
        },

        '& .MuiTypography-root.MuiFormControlLabel-label': {
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '15px',

            '-moz-user-select': '-moz-none',
            '-khtml-user-select': '-moz: none',
            '-webkit-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none'
        },
    },
}))

const useStyles = makeStyles(() => ({
    optionText: {
        color: 'rgb(255, 170, 0)',
        fontSize: '14px',
        fontWeight: '500',
        marginTop: '20px',
        marginBottom: '5px'
    }
}))

export default TradeTypeOptions;