import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const OtherOptions = ({hideOutOfStockSigns, setHideOutOfStockSigns, hideIdenticalSigns, setHideIdenticalSigns, tradeType}) => {
    const classes = useStyles()
    const materialClasses = useMaterialStyles()

    return (
        <div>
            <Typography className={classes.optionText}>Options</Typography>

            <div>
                <FormControlLabel
                    control={<Checkbox checked={hideIdenticalSigns} onChange={setHideIdenticalSigns}/>}
                    label='Hide Identical Signs'
                    classes={materialClasses}
                />
            </div>

            {tradeType === 'buy' && <div>
                <FormControlLabel
                    control={<Checkbox checked={hideOutOfStockSigns} onChange={setHideOutOfStockSigns}/>}
                    label='Hide Out of Stock Signs'
                    classes={materialClasses}
                />
            </div>}
        </div>
    )
}

const useMaterialStyles = makeStyles(() => ({
    root: {
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
            color: '#6ba65e'
        },

        '& .MuiTypography-root.MuiFormControlLabel-label': {
            color: 'rgba(255, 255, 255, 0.75)'
        },

        '& .MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1': {
            fontSize: '15px'
        }
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

export default OtherOptions;