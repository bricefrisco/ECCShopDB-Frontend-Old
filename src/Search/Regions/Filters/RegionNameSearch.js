import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchRegionNames } from '../../../API/regionApi'

const RegionNameSearch = ({name, setName, server, hideDisabledRegions}) => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    const loading = open && options.length === 0;
    const classes = useStyles()

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        const serverParam = server === 'all' ? '' : server

        fetchRegionNames(serverParam, hideDisabledRegions)
            .then(response => {
                if (active) {
                    if (response.length === 0) {
                        setOptions([])
                        return;
                    }
                    setOptions(response.map(r => ({ name: r, value: r })));
                }
            })

        return () => {
            active = false;
        };
    }, [loading, server, hideDisabledRegions]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            value={name}
            onChange={setName}
            classes={classes}
            id="region-selection"
            style={{ width: 250 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            autoHighlight
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Region Name"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiAutocomplete-root': {
            height: '40px'
        },

        '& .MuiInputBase-root.MuiOutlinedInput-root.MuiAutocomplete-inputRoot': {
            backgroundColor: '#242526'
        },

        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
            padding: '1px',
            paddingLeft: '5px'
        },

        "& label[data-shrink='false']": {
            transform: 'translate(14px, 13px) scale(1)',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px'
        },

        '& .Mui-focused': {
            color: '#6ba65e'
        },

        '& .MuiFormLabel-filled': {
            color: 'rgb(107, 166, 94, 0.7)'
        },

        '& .MuiSvgIcon-root': {
            color: 'rgba(255, 255, 255, 0.7)'
        },

        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#6ba65e',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6ba65e',
            },
        },
    },

    listbox: {
        backgroundColor: '#242526',
        color: 'rgba(255, 255, 255, 0.7)'
    },

    noOptions: {
        backgroundColor: '#242526',
        color: 'rgba(255, 255, 255, 0.7)'
    },

    loading: {
        backgroundColor: '#242526',
        color: 'rgba(255, 255, 255, 0.7)'
    },

    option: {
        '&:hover': {
            backgroundColor: '#323232'
        }
    },

    inputFocused: {
        color: 'rgba(255, 255, 255, 0.7)'
    },

    clearIndicator: {
        color: 'rgba(255, 255, 255, 0.85)'
    },

    endAdornment: {
        color: 'rgba(255, 255, 255, 0.7)'
    },

    popper: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
}))

export default RegionNameSearch

