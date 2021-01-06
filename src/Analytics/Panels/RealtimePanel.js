import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Client } from '@stomp/stompjs'

import RealTimeEvent from '../Events/RealTimeEvent'
import { getAllAnalytics } from '../../API/analytics'

class RealtimePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: true
        })

        getAllAnalytics(1, 25)
            .then(response => {
                this.setState({
                    events: response.results,
                    loading: false,
                })
            })

        // const cli = new Client({ brokerURL: process.env.REACT_APP_WS_URL })
        // cli.onConnect = () => {
        //     cli.subscribe('/topic/events', (message) => {
        //         if (this.state.events.length >= 25) {
        //             this.setState({
        //                 ...this.state,
        //                 events: [JSON.parse(message.body), ...this.state.events.slice(0, 24)]
        //             })
        //         } else {
        //             this.setState({
        //                 ...this.state,
        //                 events: [JSON.parse(message.body), ...this.state.events]
        //             })
        //         }
        //     })
        // }
        //
        // cli.activate()

    }

    render() {
        const {classes} = this.props

        if (this.state.loading) {
            return (
                <div className={classes.container}>
                    Loading.
                </div>
            )
        }

        return (
            <div className={classes.container}>
                <h1 className={classes.title}>Real-time events</h1>
                {this.state.events.map((event, idx) => <RealTimeEvent key={idx} event={event}/>)}
            </div>
        )
    }
}

const styles = () => ({
    container: {
        width: '100%',
        marginLeft: '100px'
    },

    title: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '300'
    }
})

export default withStyles(styles)(RealtimePanel);