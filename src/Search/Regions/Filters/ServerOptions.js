import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const ServerOptions = ({server, setServer}) => {
    const classes = useStyles()
    const materialClasses = useMaterialStyles()

    return (
        <div>
            <Typography className={classes.optionText}>Server</Typography>
            <RadioGroup classes={materialClasses} value={server} onChange={setServer}>
                <FormControlLabel value='all' control={<Radio/>} label='All'/>
                <FormControlLabel value='main' control={<Radio/>} label='Main'/>
                <FormControlLabel value='main-north' control={<Radio/>} label='Main-North'/>
                <FormControlLabel value='main-east' control={<Radio/>} label='Main-East'/>
            </RadioGroup>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    optionText: {
        color: 'rgb(255, 170, 0)',
        fontSize: '14px',
        fontWeight: '500',
        marginTop: '20px',
        marginBottom: '5px'
    }
}))

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
    }
}))

export default ServerOptions;