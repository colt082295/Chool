import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
/* eslint-disable */
import calendarCss from '!isomorphic-style-loader!css-loader!./BigCalendar.css';
/* eslint-enable */
import s from './Calendar.css';

class Calendar extends React.Component {
  static propTypes = {
    events: PropTypes.instanceOf(Array).isRequired,
  };

  componentWillMount() {
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  }

  render() {
    return (
      <div>
        <BigCalendar
          events={this.props.events}
          views={['month', 'week', 'day', 'agenda']}
          step={30}
          showMultiDayTimes
          defaultDate={new Date()}
        />
      </div>
    );
  }
}

export default withStyles(s, calendarCss)(Calendar);
