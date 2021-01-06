import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import RealTimeEvent from '../Events/RealTimeEvent';
import { getAllAnalytics } from '../../API/analytics';

class RealtimePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });

    getAllAnalytics(1, 25).then((response) => {
      this.setState({
        events: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return <div className={classes.container}>Loading.</div>;
    }

    return (
      <div className={classes.container}>
        <h1 className={classes.title}>Real-time events</h1>
        {this.state.events.map((event, idx) => (
          <RealTimeEvent key={idx} event={event} />
        ))}
      </div>
    );
  }
}

const styles = () => ({
  container: {
    width: '100%',
    marginLeft: '100px',
  },

  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
  },
});

export default withStyles(styles)(RealtimePanel);
