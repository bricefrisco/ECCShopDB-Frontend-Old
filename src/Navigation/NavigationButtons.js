import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavigationButton from './NavigationButton'

const NavigationButtons = ({page}) => {
  const classes = useStyles()

  const NAVIGATION_BUTTONS = ['home', 'search', 'forum']

  return (
    <div className={classes.navigationButtons}>
      {NAVIGATION_BUTTONS.map((text, idx) =>
        <NavigationButton key={idx}
          text={text}
          selected={page === text}
         />
      )}
    </div>
  )

}

const useStyles = makeStyles(() => ({
  navigationButtons: {
    display: 'flex'
  }
}))

export default NavigationButtons;