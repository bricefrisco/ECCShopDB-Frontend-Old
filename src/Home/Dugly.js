import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as skinview3d  from 'skinview3d'

const Dugly = () => {
    const classes = useStyles()

    React.useEffect(() => {
        let skinViewer = new skinview3d.SkinViewer({
            canvas: document.getElementById('dugly-skin-viewer'),
            width: 300,
            height: 500,
            skin: '/img/DuglySkin.png'
        })

        skinViewer.loadSkin('/img/DuglySkin.png')

        let control = skinview3d.createOrbitControls(skinViewer)
        control.enableRotate = true
        control.enableZoom = true

        let walk = skinViewer.animations.add(skinview3d.WalkingAnimation)
        walk.speed = 0.3
    }, [])

    return (
        <canvas id='dugly-skin-viewer' className={classes.dugly}/>
    )
}

const useStyles = makeStyles(() => ({
    dugly: {
        '&:focus': {
            outline: 'none'
        },
    }
}))

export default Dugly;