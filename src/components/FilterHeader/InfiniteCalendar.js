import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
// import onClickOutside from 'react-onclickoutside';
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar';
import reactCalendarCss from 'react-infinite-calendar/styles.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Calendar.css';

class InfiniteCalendarComponent extends React.Component {
  static propTypes = {
    startWeek: PropTypes.instanceOf(Object).isRequired,
    endWeek: PropTypes.instanceOf(Object).isRequired,
    calenderOpen: PropTypes.bool.isRequired,
    dateSelected: PropTypes.func.isRequired,
  };

  render() {
    const { startWeek, endWeek, calenderOpen } = this.props;
    return (
      <InfiniteCalendar
        Component={withRange(Calendar)}
        // height="280px"
        onSelect={e => {
          this.props.dateSelected(e);
        }}
        selected={{
          start: moment(startWeek).toDate(),
          end: moment(endWeek).toDate(),
        }}
        displayOptions={{
          showHeader: false,
          showOverlay: false,
          shouldHeaderAnimate: false,
        }}
        className={`${s.calendar} ${calenderOpen ? s.calendarOpen : ''}`}
      />
    );
  }
}

export default withStyles(s, reactCalendarCss)(InfiniteCalendarComponent);
